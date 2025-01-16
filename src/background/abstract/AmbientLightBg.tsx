import { forwardRef, useCallback, useId } from 'react'
import { AmbientLightBg as Background } from 'color4bg/src/color4bg/AbstractBackground/AmbientLightBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type AmbientLightBgProps = {
  noise?: number
  speed?: number
  patternScale?: number
  edgeBlur?: number
  brightness?: number
  darkness?: number
} & BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const AmbientLightBg = forwardRef<HTMLDivElement, AmbientLightBgProps>(({
  colors, seed, loop, noise, speed, patternScale, edgeBlur, brightness, darkness,
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
    if (typeof patternScale === 'number') {
      background.update('pattern scale', patternScale)
    }
    if (typeof edgeBlur === 'number') {
      background.update('edge blur', edgeBlur)
    }
    if (typeof brightness === 'number') {
      background.update('brightness', brightness)
    }
    if (typeof darkness === 'number') {
      background.update('darkness', darkness)
    }
    return background
  }, [id, colors, seed, loop, noise, speed, patternScale, edgeBlur, brightness, darkness])

  useBackground(onCreate)

  return <div {...rest} id={id} ref={ref} />
})

export default AmbientLightBg
