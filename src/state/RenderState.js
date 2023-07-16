import { makeObservable } from "mobx"
import * as tjs from 'three'
import { clampCircular, TAU, TAU4 } from "@/mathUtils"
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
    this.orbitSpeed = new tjs.Vector2(0.01, 0.01)
    this.orbitStartMousePos = new tjs.Vector2()
    this.orbitStartCamAngle = new tjs.Vector2()

    // shifting -- click and drag to translate
    this.isOrbiting = false
    this.orbitSpeed = new tjs.Vector2(0.01, 0.01)
    this.orbitStartMousePos = new tjs.Vector2()
    this.orbitStartCamAngle = new tjs.Vector2()

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

      if (this.keyStates["Alt"]) {
        this.isOrbiting = true

        const offT = e.target.getBoundingClientRect()
        const offX = e.clientX - offT.left
        const offY = e.clientY - offT.top
        this.orbitStartMousePos.set(e.screenX, e.screenY)
        this.orbitStartCamAngle.copy(this.cameraAngle)

        // insert sentinel action to be updated by mousemove
        this.updateCamAngle.trackWith({ isCall: false })(this.cameraAngle.x, this.cameraAngle.y)
      }

      if (this.keyStates["Shift"]) {
        this.isOrbiting = true

        const offT = e.target.getBoundingClientRect()
        const offX = e.clientX - offT.left
        const offY = e.clientY - offT.top
        this.orbitStartMousePos.set(e.screenX, e.screenY)
        this.orbitStartCamAngle.copy(this.cameraAngle)

        // insert sentinel action to be updated by mousemove
        this.updateCamAngle.trackWith({ isCall: false })(this.cameraAngle.x, this.cameraAngle.y)
      }

    })

    window.addEventListener('mouseup', (e) => {
      if (this.isOrbiting) {
        this.isOrbiting = false
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

    // TODO: events: resize, wheel, touch...

    // scene setup
    this.scene = new tjs.Scene()
    this.scene.background = new tjs.Color(0x101010);
    const geometry = new tjs.BoxGeometry(1, 1, 1)
    const material = new tjs.MeshLambertMaterial({ color: 0x11AA11 })
    this.theCube = new tjs.Mesh(geometry, material)
    this.scene.add(this.theCube)

    const geometryCustom = new tjs.BufferGeometry();

    var vertices = new Float32Array(4 * 3);

    var cv = 0
    const pushVertex = (...values) => {
      for (const v in values) {
        vertices[cv] = values[v]
        cv++
      }
    }
    pushVertex(-3.0, 13, 0) // v0
    pushVertex(12, 10, 0) // v1
    pushVertex(15, 13, 0) // v2

    const indices = [
      2, 0, 1,
      // 2, 3, 0,
    ];


    // geometryCustom.setIndex(indices);
    // geometryCustom.setAttribute('position', new tjs.BufferAttribute(vertices, 3));

    // const materialCustom = new tjs.MeshBasicMaterial({ color: 0xCC5511 });
    // const mesh = new tjs.Mesh(geometryCustom, materialCustom);
    // this.scene.add(mesh)

    const axesHelper = new tjs.AxesHelper(5)
    this.scene.add(axesHelper)

    // lighting
    this.scene.add(new tjs.AmbientLight(0x353550, 1))

    const light1 = new tjs.PointLight(0xffeeff, 100, 100)
    light1.position.set(5, 5, 5)
    this.scene.add(light1)

    const directionalLight = new tjs.DirectionalLight(0xffffff, 0.5);
    this.scene.add(directionalLight);

    makeObservable(this, {
      render: true,
      updateCamAngle: true
    })

    this.history = hsTrack(this, {
      updateCamAngle: ACTION
    })

    root.registerActions(this, {
      focusObject: {}
    })

    // initialize history with current value
    this.updateCamAngle.trackWith({ isCall: false })(this.cameraAngle.x, this.cameraAngle.y)

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

  focusObject(){
    // find bounding box and a safe radius
    const bbox = new tjs.Box3().setFromObject(this.scene.children.at(-1))
    bbox.getCenter(this.focusPoint)
    const bsphere = new tjs.Sphere()
    bbox.getBoundingSphere(bsphere)

    this.focusDistance = bsphere.radius;

    this.updateCamera()
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

    this.root.count++
    this.renderIsQueued = false
  }

}

export default RenderState