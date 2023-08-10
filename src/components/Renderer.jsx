import { useRef, useState, useEffect } from 'react'
import * as tjs from 'three'
import rootState from "@/state/rootState"
import useGenericPointer from "@/framework/genericPointer"
import { clampCircular, TAU, TAU2, TAU4 } from "@/mathUtils"

/**
 * Renderer -- connected to rootState.render from RenderState.js
 * 
*/
const Renderer = ({ }) => {

  const canvasContainerRef = useRef(null)
  const self = rootState.render._target

  useEffect(() => {
    const container = canvasContainerRef.current
    container.appendChild(self.renderer.domElement)
    return () => container.removeChild(self.renderer.domElement)
  }, [])


  useGenericPointer({
    elementRef: canvasContainerRef,
    onDown: (e) => {
      if (self.isOrbitMode) {
        self.isOrbiting = true
  
        self.orbitStartMousePos.set(e.screenX, e.screenY)
        self.orbitStartCamAngle.copy(self.cameraAngle)
  
        // insert sentinel action to be updated by mousemove
        self._module.updateCamAngle.action.trackWith({ isDummyCall: true })(self.cameraAngle.x, self.cameraAngle.y)
      } else if (self.isPanMode) {
        self.isPanning = true
  
        self.panStartMousePos.set(e.screenX, e.screenY)
        self.panStartPos.copy(self.focusPoint)
        self.panSpeed.set(0.003 * self.focusDistance, 0.003 * self.focusDistance)
  
        const forward = new tjs.Vector3().copy(self.focusPoint).sub(self.camera.position)
        self.panUnitX.crossVectors(new tjs.Vector3(0, 1, 0), forward).normalize()
        self.panUnitY.crossVectors(forward, self.panUnitX).normalize()
      }
    },
    onMove: (e) => {
      if (self.isOrbiting) {

        // cameraAngle = clamp(cameraAngleStart + mouseDelta * speed) 
        // -- it's absolute for better responsivity
        const mouseDelta = new tjs.Vector2(e.screenX, e.screenY).sub(self.orbitStartMousePos)
        mouseDelta.multiply(self.orbitSpeed)
        self.cameraAngle.copy(self.orbitStartCamAngle).add(mouseDelta)
  
        // on a sphere: TAU x = full ecuator, -TAU4 y = south pole, TAU4 y = north pole
        self._module.updateCamAngle.action.trackWith({ isOverwrite: true })(
          clampCircular(self.cameraAngle.x, 0, TAU),
          tjs.MathUtils.clamp(self.cameraAngle.y, -TAU4, TAU4)
        )
      } else if (self.isPanning) {
  
        const mouseDelta = new tjs.Vector2(e.screenX, e.screenY).sub(self.panStartMousePos)
        mouseDelta.multiply(self.panSpeed)
        const deltaX = new tjs.Vector3().copy(self.panUnitX).multiplyScalar(mouseDelta.x)
        const deltaY = new tjs.Vector3().copy(self.panUnitY).multiplyScalar(mouseDelta.y)
        self.focusPoint.copy(self.panStartPos).add(deltaX).add(deltaY)
  
        self.updateCamera()
        self.invalidate()
      }
    },
    onUp: (e) => {
      self.isOrbiting = false
      self.isPanning = false
    }
  })

  return (
    <div ref={canvasContainerRef} />
  )
}

export default Renderer
