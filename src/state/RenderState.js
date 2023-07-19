import { makeObservable, autorun, action } from "mobx"
import * as tjs from 'three'
import { clampCircular, TAU, TAU2, TAU4 } from "@/mathUtils"
import { ACTION, hsTrack } from "./history"

class RenderState {

  constructor(root) {
    this.root = root

    // renderer
    this.renderer = new tjs.WebGLRenderer({ antialias: true })
    this.renderIsQueued = false
    this.renderer.setSize(640, 480)
    this.renderer.useLegacyLights = false

    // camera
    this.camera = new tjs.PerspectiveCamera(75, 640 / 480, 0.1, 1000)
    this.focusPoint = new tjs.Vector3(0, 0, 0)
    this.focusDistance = 20
    this.cameraAngle = new tjs.Vector2(0, 0) // pitch, yaw (offset in radians plane X, Y)
    this.updateCamera()

    // orbiting -- click and drag to rotate
    this.isOrbiting = false
    this.isOrbitMode = true
    this.orbitSpeed = new tjs.Vector2(0.01, 0.01)
    this.orbitStartMousePos = new tjs.Vector2()
    this.orbitStartCamAngle = new tjs.Vector2()

    // panning -- click and drag to translate
    this.isPanMode = false
    this.isPanning = false
    this.panSpeed = new tjs.Vector2(0.01, 0.01)
    this.panStartPos = new tjs.Vector3()
    this.panUnitX = new tjs.Vector3()
    this.panUnitY = new tjs.Vector3()
    this.panStartMousePos = new tjs.Vector2()

    // input state
    this.hasMouseFocus = false
    this.keyStates = {
      "Control": false,
      "Alt": false,
      "Shift": false,
    }

    // ui events
    window.addEventListener('mousedown', (e) => {
      if (!this.hasMouseFocus) return

      if (this.isOrbitMode) {
        this.isOrbiting = true

        const offT = e.target.getBoundingClientRect()
        const offX = e.clientX - offT.left
        const offY = e.clientY - offT.top
        this.orbitStartMousePos.set(e.screenX, e.screenY)
        this.orbitStartCamAngle.copy(this.cameraAngle)

        // insert sentinel action to be updated by mousemove
        this.updateCamAngle.trackWith({ isDummyCall: true })(this.cameraAngle.x, this.cameraAngle.y)
      } else if (this.isPanMode) {
        this.isPanning = true
        console.log("this.isPanning")

        const offT = e.target.getBoundingClientRect()
        this.panStartMousePos.set(e.screenX, e.screenY)
        this.panStartPos.copy(this.focusPoint)

        const forward = new tjs.Vector3().copy(this.focusPoint).sub(this.camera.position)
        this.panUnitX.crossVectors(forward, new tjs.Vector3(0, 1, 0)).normalize()
        this.panUnitY.crossVectors(this.panUnitX, forward).normalize()
      }


    })

    window.addEventListener('mouseup', (e) => {
      if (!this.hasMouseFocus) return

      if (this.isOrbiting) {
        this.isOrbiting = false
      }
      if (this.isPanning) {
        this.isPanning = false
      }
    })

    window.addEventListener('mousemove', (e) => {
      this.hasMouseFocus = e.target == this.renderer.domElement

      if (this.isOrbiting) {

        // cameraAngle = clamp(cameraAngleStart + mouseDelta * speed) 
        // -- it's absolute for better responsivity
        const mouseDelta = new tjs.Vector2(e.screenX, e.screenY).sub(this.orbitStartMousePos)
        mouseDelta.multiply(this.orbitSpeed)
        this.cameraAngle.copy(this.orbitStartCamAngle).add(mouseDelta)

        // on a sphere: TAU x = full ecuator, -TAU4 y = south pole, TAU4 y = north pole
        this.updateCamAngle.trackWith({ isOverwrite: true })(
          clampCircular(this.cameraAngle.x, 0, TAU),
          tjs.MathUtils.clamp(this.cameraAngle.y, -TAU4, TAU4)
        )
      } else if (this.isPanning) {

        const mouseDelta = new tjs.Vector2(e.screenX, e.screenY).sub(this.panStartMousePos)
        mouseDelta.multiply(this.panSpeed)
        const deltaX = new tjs.Vector3().copy(this.panUnitX).multiplyScalar(mouseDelta.x)
        const deltaY = new tjs.Vector3().copy(this.panUnitY).multiplyScalar(mouseDelta.y)
        this.focusPoint.copy(this.panStartPos).add(deltaX).add(deltaY)
        // FIXME: update camera angle too 
        this.updateCamera()
        this.invalidate()

      }
    })

    window.addEventListener('keydown', (e) => {
      if (e.key in this.keyStates) {
        this.keyStates[e.key] = true
      }

    })
    window.addEventListener('keyup', (e) => {
      if (e.key in this.keyStates) {
        this.keyStates[e.key] = false
      }
    })

    // scene setup
    this.scene = new tjs.Scene()
    this.scene.background = new tjs.Color(0x101010);

    const axesHelper = new tjs.AxesHelper(5)
    this.scene.add(axesHelper)

    // lighting
    this.scene.add(new tjs.AmbientLight(0x353550, 1))

    const light1 = new tjs.PointLight(0xffeeff, 100, 100)
    light1.position.set(5, 5, 5)
    this.scene.add(light1)

    const directionalLight = new tjs.DirectionalLight(0xffffff, 100);
    this.scene.add(directionalLight);

    // objects
    // const geometry = new tjs.BoxGeometry(1, 1, 1)
    const geometry = new tjs.SphereGeometry(1, 10, 10)
    const material = new tjs.MeshLambertMaterial({ color: 0x11AA11 })
    this.theMesh = new tjs.Mesh(geometry, material)
    this.scene.add(this.theMesh)

    root.registerModule(root, this, {
      actions: {
        render: {
          symbolName: null
        },
        randomCameraAngle: {},
        updateCamAngle: {
          history: {}
        },
        prevCamAngle: {
          name: "Prev Cam",
          symbolName: null
        },
        nextCamAngle: {
          name: "Next Cam",
          symbolName: null
        },
        focusObject: {
          name: "Focus Last Object",
          symbolName: null
        },
        zoomIn: {},
        zoomOut: {}
      },
      properties: {
        isOrbitMode: {
          name: "Orbit",
          symbolName: "orbit",
          onToggle: action(() => { //TODO: create a mutex group
            if (!this.isOrbitMode) {
              this.properties.isPanMode.value = false
            }
            this.properties.isOrbitMode.value = !this.isOrbitMode
          })
        },
        isPanMode: {
          name: "Pan",
          symbolName: "pan",
          onToggle: action(() => {
            if (!this.isPanMode) {
              this.properties.isOrbitMode.value = false
            }
            this.properties.isPanMode.value = !this.isPanMode
          })
        }
      }
    })

    // TODO: add a mutex group to handle this
    // autorun(() => { if (this.properties.isOrbitMode) this.properties.isPanMode = false })

    // initialize history with dummy call of current value
    this.updateCamAngle.trackWith({ isDummyCall: true })(this.cameraAngle.x, this.cameraAngle.y)

    this._queueRender()
  }

  updateCamera() {
    // (focus point, focus distance) -> (camera position, camera rotation)
    const [xc, xs] = [Math.cos(this.cameraAngle.x), Math.sin(this.cameraAngle.x)]
    const [yc, ys] = [Math.cos(this.cameraAngle.y), Math.sin(this.cameraAngle.y)]

    this.camera.position.set(xc * yc, ys, xs * yc)
    this.camera.position.multiplyScalar(this.focusDistance)
    this.camera.lookAt(this.focusPoint)
  }

  prevCamAngle() {
    this.history.updateCamAngle.tryPrev().call()
  }

  nextCamAngle() {
    this.history.updateCamAngle.tryNext().call()
  }

  updateCamAngle(x, y) {
    this.cameraAngle.set(x, y)
    this.updateCamera()
    this.invalidate()
  }

  zoomIn() {
    this.focusDistance *= 0.9
    this.updateCamera()
    this.invalidate()
  }

  zoomOut() {
    this.focusDistance *= 1.11112 // this * 0.9 ~ 1
    this.updateCamera()
    this.invalidate()
  }

  randomCameraAngle() {
    this.updateCamAngle(Math.random() * TAU, Math.random() * TAU2 - TAU4)
  }

  focusObject() {

    // find bounding box and a safe radius
    const bbox = new tjs.Box3().setFromObject(this.scene.children.at(-1))
    bbox.getCenter(this.focusPoint)
    const bsphere = new tjs.Sphere()
    bbox.getBoundingSphere(bsphere)

    this.focusDistance = bsphere.radius;

    this.updateCamera()
    this.invalidate()
  }

  get domElement() {
    return this.renderer.domElement
  }

  _queueRender() {
    // call render once on next browser redraw
    requestAnimationFrame(() => this.render())
  }

  invalidate() {
    if (!this.renderIsQueued) {
      this._queueRender()
      this.renderIsQueued = true
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera)

    this.root.properties.count.value = this.root.count + 1
    this.renderIsQueued = false
  }

}

export default RenderState