import { forwardRef, useCallback, useId } from 'react'
import { CurveGradientBg as Background } from 'color4bg/src/color4bg/AbstractBackground/CurveGradientBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type CurveGradientBgProps = {
  noise?: number
  speed?: number
  density?: number
  scale?: number
} & BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const CurveGradientBg = forwardRef<HTMLDivElement, CurveGradientBgProps>(({
  colors, seed, loop, noise, speed, density, scale,
  ...rest
}, ref) => {
  const id = useId()

  const onCreate = useCallback(() => {
    const background = new Background({ dom: id, colors, seed, loop })
    if (typeof noise === 'number') {
      background.update('noise', noise)
    }
    if (typeof speed === 'number') {
      background.update('speed', speed)
    }
    if (typeof density === 'number') {
      background.update('density', density)
    }
    if (typeof scale === 'number') {
      background.update('scale', scale)
    }
    return background
  }, [id, colors, seed, loop, noise, speed, density, scale])

  useBackground(onCreate)

  return <div {...rest} id={id} ref={ref} />
})

export default CurveGradientBg
