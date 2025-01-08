import { forwardRef, useCallback, useMemo } from 'react'
import { v1 as uuidV1 } from 'uuid'
import { GridArrayBg as Background } from 'color4bg/src/color4bg/AbstractBackground/GridArrayBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type GridArrayBgProps = {
  scale?: number
  size?: number
  uw?: number
  uh?: number
  amplitude?: number
  radius?: number
  borderwidth?: number
  rotateCanvas?: number
  rotateUnit?: number
  speed?: number
  noise?: number
} & BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const GridArrayBg = forwardRef<HTMLDivElement, GridArrayBgProps>(({
  colors, seed, loop,
  scale, size, uw, uh, amplitude, radius, borderwidth, rotateCanvas, rotateUnit, speed, noise,
  onInit,
  ...rest
}, ref) => {
  const id = useMemo(() => uuidV1(), [])

  const onCreate = useCallback(() => {
    const background = new Background({ dom: id, colors, seed, loop })
    if (typeof scale === 'number') {
      background.update('scale', scale)
    }
    if (typeof size === 'number') {
      background.update('size', size)
    }
    if (typeof uw === 'number') {
      background.update('u_w', uw)
    }
    if (typeof uh === 'number') {
      background.update('u_h', uh)
    }
    if (typeof amplitude === 'number') {
      background.update('amplitude', amplitude)
    }
    if (typeof radius === 'number') {
      background.update('radius', radius)
    }
    if (typeof borderwidth === 'number') {
      background.update('borderwidth', borderwidth)
    }
    if (typeof rotateCanvas === 'number') {
      background.update('rotateCanvas', rotateCanvas)
    }
    if (typeof rotateUnit === 'number') {
      background.update('rotateUnit', rotateUnit)
    }
    if (typeof noise === 'number') {
      background.update('noise', noise)
    }
    if (typeof speed === 'number') {
      background.update('speed', speed)
    }
    return background
  }, [id, colors, seed, loop, scale, size, uw, uh, amplitude, radius, borderwidth, rotateCanvas, rotateUnit, speed, noise])

  useBackground(onCreate, onInit)

  return <div {...rest} id={id} ref={ref} />
})

export default GridArrayBg
