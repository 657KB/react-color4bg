import { forwardRef, useCallback, useId } from 'react'
import { SwirlingCurvesBg as Background } from 'color4bg/src/color4bg/AbstractBackground/SwirlingCurvesBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type SwirlingCurvesBgProps = {
  noise?: number
  speed?: number
  density?: number
  scale?: number
} & BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const SwirlingCurvesBg = forwardRef<HTMLDivElement, SwirlingCurvesBgProps>(({
  colors, seed, loop,
  noise, speed, density, scale,
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
      background.update('density', scale)
    }
    return background
  }, [id, colors, seed, loop, noise, speed, density, scale])

  useBackground(onCreate)

  return <div {...rest} id={id} ref={ref} />
})

export default SwirlingCurvesBg
