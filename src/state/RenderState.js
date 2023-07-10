import { makeAutoObservable } from "mobx"
import * as tjs from 'three';


class RenderState {
  root
  renderer
  scene
  camera
  renderIsQueued
  theCube

  constructor(root) {
    this.root = root
    this.renderIsQueued = false
    this.scene = new tjs.Scene()
    this.camera = new tjs.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    this.renderer = new tjs.WebGLRenderer()
    this.renderer.setSize(640, 480)

    const geometry = new tjs.BoxGeometry(1, 1, 1)
    const material = new tjs.MeshBasicMaterial({ color: 0x00ff00 })
    this.theCube = new tjs.Mesh(geometry, material)
    this.scene.add(this.theCube)

    this.camera.position.z = 5

    makeAutoObservable(this, {
      root: false,
      renderer: false,
      domElement: false,
      _queueRender: false,
      theCube: false
    })

    this._queueRender()
  }

  get domElement() {
    return this.renderer.domElement
  }

  _queueRender() {
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
    this.theCube.rotation.x += 0.01
    this.theCube.rotation.y += 0.01
  }

  tick() {
    this.count++
  }
}

export default RenderState