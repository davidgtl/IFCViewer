import { useRef, useEffect } from 'react'
import fn from '@/fn'

/**
*  Abstract over mouse and one touch as pointer 
*/
const useGenericPointer = ({ elementRef, onDown, onMove, onUp }) => {

  fn.codeDoc(
    function use() {
      const elementRef = useRef(null)

      useGenericPointer({
        elementRef: elementRef,
        onDown: (pointer) => {
          // ...
        },
        onMove: (pointer) => {
          console.log(pointer.target, pointer.screenX, pointer.screenY)
          runInAction(() => {
            property.obs = pointer.screenX + 5
          })
        },
        onUp: (pointer) => {
          // ...
        }
      })

      return (
        <div ref={elementRef} />
      )
    }
  )

  const handler = useRef({
    touchId: null,
  }).current

  useEffect(() => {

    const onMouseDown = (e) => {
      e.preventDefault()

      addEventListener("mousemove", onMouseMove)
      addEventListener("mouseup", onMouseUp)

      onDown(e)
    }
    const onMouseMove = (e) => {
      e.preventDefault()

      onMove(e)
    }
    const onMouseUp = (e) => {
      e.preventDefault()

      removeEventListener("mousemove", onMouseMove)
      removeEventListener("mouseup", onMouseUp)

      onUp(e)
    }
    const onTouchStart = (e) => {
      e.preventDefault()

      addEventListener("touchmove", onTouchMove, { passive: false })
      addEventListener("touchend", onTouchEnd, { passive: false })
      addEventListener("touchcancel", onTouchCancel, { passive: false })

      const pointer = e.changedTouches[0]
      handler.touchId = pointer.identifier

      onDown(pointer)
    }
    const onTouchMove = (e) => {
      e.preventDefault()

      // changedTouches is an object not an array...
      for (let i = 0; i < e.changedTouches.length; i++) {
        const pointer = e.changedTouches[i]
        if (pointer.identifier == handler.touchId) {

          onMove(pointer)

        }
      }
    }
    const onTouchCancel = (e) => {
      e.preventDefault()

      for (let i = 0; i < e.changedTouches.length; i++) {
        const pointer = e.changedTouches[i]
        if (pointer.identifier == handler.touchId) {

          removeEventListener("touchmove", onTouchMove)
          removeEventListener("touchend", onTouchEnd)
          removeEventListener("touchcancel", onTouchCancel)

          onUp(pointer)
        }
      }
    }
    const onTouchEnd = (e) => {
      e.preventDefault()

      for (let i = 0; i < e.changedTouches.length; i++) {
        const pointer = e.changedTouches[i]
        if (pointer.identifier == handler.touchId) {

          removeEventListener("touchmove", onTouchMove)
          removeEventListener("touchend", onTouchEnd)
          removeEventListener("touchcancel", onTouchCancel)

          onUp(pointer)
        }
      }
    }

    elementRef.current.addEventListener('touchstart', onTouchStart, { passive: false })
    elementRef.current.addEventListener('mousedown', onMouseDown)

    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener('touchstart', onTouchStart);
        elementRef.current.removeEventListener('mousedown', onMouseDown);
      }
    }
  }, [])

}

export default useGenericPointer