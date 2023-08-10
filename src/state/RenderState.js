import { action } from "mobx"
import * as tjs from 'three'
import registerModule from "@/framework/registerModule"
import { clampCircular, TAU, TAU2, TAU4 } from "@/mathUtils"

class RenderState {

  constructor(root, parent) {
    this.root = root

    // renderer
    this.renderer = new tjs.WebGLRenderer({ antialias: true })
    this.renderIsQueued = false
    const documentWidth = Number.parseFloat(getComputedStyle(window.document.documentElement).width)*0.9
    
    this.renderer.setSize(documentWidth, Math.floor(documentWidth/1.3333))
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
    this.panSpeed = new tjs.Vector2(0.05, 0.05)
    this.panStartPos = new tjs.Vector3()
    this.panUnitX = new tjs.Vector3()
    this.panUnitY = new tjs.Vector3()
    this.panStartMousePos = new tjs.Vector2()

    // input state
    this.keyStates = {
      "Control": false,
      "Alt": false,
      "Shift": false,
    }

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

    const directionalLight = new tjs.DirectionalLight(0xffffff, 0.5);
    this.scene.add(directionalLight);

    // objects
    // const geometry = new tjs.BoxGeometry(1, 1, 1)
    const geometry = new tjs.SphereGeometry(1, 10, 10)
    const material = new tjs.MeshLambertMaterial({ color: 0x11AA11 })
    this.theMesh = new tjs.Mesh(geometry, material)
    this.scene.add(this.theMesh)

    this._module = registerModule(root, parent, this, {
      actions: {
        render: {
          symbolName: null
        },
        invalidate: {
          symbolName: null,
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
        normalizeObject: {
          symbolName: null
        },
        zoomIn: {},
        zoomOut: {}
      },
      props: {
        isOrbitMode: {
          name: "Orbit",
          symbolName: "orbit",
          onToggle: action(() => { //TODO: create a mutex group
            if (!this.isOrbitMode) {
              this._module.isPanMode.obs = false
            }
            this._module.isOrbitMode.obs = !this.isOrbitMode
          })
        },
        isPanMode: {
          name: "Pan",
          symbolName: "pan",
          onToggle: action(() => {
            if (!this.isPanMode) {
              this._module.isOrbitMode.obs = false
            }
            this._module.isPanMode.obs = !this.isPanMode
          })
        },
        focusDistance: {
          symbolName: null,
          valueMin: 0,
          valueMax: 100,
          valueStep: 0.1, //TODO: relative values
          onUpdate: (valueOld, valueNew) => {
            this.updateCamera()
            this.invalidate()
          }
        }
      }
    })

    // TODO: add a mutex group to handle this
    // autorun(() => { if (this.props.isOrbitMode) this.props.isPanMode = false })

    // initialize history with dummy call of current value
    this._module.updateCamAngle.action.trackWith({ isDummyCall: true })(this.cameraAngle.x, this.cameraAngle.y)

    this._queueRender()
  }

  updateCamera() {
    // (focus point, focus distance) -> (camera position, camera rotation)
    const [xc, xs] = [Math.cos(this.cameraAngle.x), Math.sin(this.cameraAngle.x)]
    const [yc, ys] = [Math.cos(this.cameraAngle.y), Math.sin(this.cameraAngle.y)]
    const offset = new tjs.Vector3(xc * yc, ys, xs * yc).multiplyScalar(this.focusDistance)

    this.camera.position.copy(this.focusPoint).add(offset)
    this.camera.lookAt(this.focusPoint)
  }

  prevCamAngle() {
    this._module.updateCamAngle.action.history.tryPrev().call()
  }

  nextCamAngle() {
    this._module.updateCamAngle.action.history.tryNext().call()
  }

  updateCamAngle(x, y) {
    this.cameraAngle.set(x, y)
    this.updateCamera()
    this.invalidate()
  }

  zoomIn() {
    this._module.focusDistance.obs = this.focusDistance * 0.9
    this.updateCamera()
    this.invalidate()
  }

  zoomOut() {
    this._module.focusDistance.obs = this.focusDistance * 1.11112 // 1.11112 * 0.9 ~ 1
    this.updateCamera()
    this.invalidate()
  }

  randomCameraAngle() {
    this._module.updateCamAngle.action(Math.random() * TAU, Math.random() * TAU2 - TAU4)
  }

  focusObject() {

    // find bounding box and a safe radius
    const bbox = new tjs.Box3().setFromObject(this.scene.children.at(-1))
    bbox.getCenter(this.focusPoint)
    const bsphere = new tjs.Sphere()
    bbox.getBoundingSphere(bsphere)

    this._module.focusDistance.obs = bsphere.radius;

    this.updateCamera()
    this.invalidate()
  }

  normalizeObject() {

    // find bounding box and a safe radius
    const bbox = new tjs.Box3().setFromObject(this.scene.children.at(-1))
    const size = new tjs.Vector3()
    bbox.getSize(size)
    const sizeMax = Math.max(size.x, size.y, size.z)
    this.scene.children.at(-1).scale.set(10 / sizeMax, 10 / sizeMax, 10 / sizeMax)

    this.invalidate()
  }

  _queueRender() {
    // call render once on next browser redraw
    requestAnimationFrame(() => this._module.render.action())
  }

  invalidate() {
    if (!this.renderIsQueued) {
      this._queueRender()
      this.renderIsQueued = true
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera)

    this.root.count.obs = this.root.count.value + 1
    this.renderIsQueued = false
  }

}

export default RenderState