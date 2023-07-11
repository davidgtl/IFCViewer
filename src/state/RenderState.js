import { makeObservable } from "mobx"
import * as tjs from 'three'
import { clampCircular, TAU, TAU4 } from "@/mathUtils"

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
    this.focusDistance = 5
    this.cameraAngle = new tjs.Vector2(0, 0) // pitch, yaw (offset in radians plane X, Y)
    this.updateCamera()

    // orbiting -- click and drag to rotate
    this.isOrbiting = false
    this.orbitSpeed = new tjs.Vector2(0.01, 0.01)
    this.orbitStartMousePos = new tjs.Vector2()
    this.orbitStartCamAngle = new tjs.Vector2()

    // ui events
    window.addEventListener('mousedown', (e) => {
      if (e.target == this.renderer.domElement) {
        const offT = e.target.getBoundingClientRect()
        const offX = e.clientX - offT.left
        const offY = e.clientY - offT.top
      }
      this.isOrbiting = true
      this.orbitStartMousePos.set(e.screenX, e.screenY)
      this.orbitStartCamAngle.copy(this.cameraAngle)

    })

    window.addEventListener('mouseup', (e) => {
      this.isOrbiting = false
    })

    window.addEventListener('mousemove', (e) => {

      if (this.isOrbiting) {

        // cameraAngle = clamp(cameraAngleStart + mouseDelta * speed) 
        // -- it's absolute for better responsivity
        const mouseDelta = new tjs.Vector2(e.screenX, e.screenY).sub(this.orbitStartMousePos)
        mouseDelta.multiply(this.orbitSpeed)
        this.cameraAngle.copy(this.orbitStartCamAngle).add(mouseDelta)

        // on a sphere: TAU x = full ecuator, -TAU4 y = south pole, TAU4 y = north pole
        this.cameraAngle.x = clampCircular(this.cameraAngle.x, 0, TAU)
        this.cameraAngle.y = tjs.MathUtils.clamp(this.cameraAngle.y, -TAU4, TAU4)

        this.updateCamera()
        this.invalidate()
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

    const axesHelper = new tjs.AxesHelper(5)
    this.scene.add(axesHelper)

    // lighting
    this.scene.add(new tjs.AmbientLight(0x353550, 1))

    const light1 = new tjs.PointLight(0xffeeff, 100, 100)
    light1.position.set(5, 5, 5)
    this.scene.add(light1)

    makeObservable(this, {
      render: true
    })

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