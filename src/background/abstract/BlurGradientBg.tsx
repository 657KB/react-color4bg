import { forwardRef, useCallback, useId } from 'react'
import { BlurGradientBg as Background } from 'color4bg/src/color4bg/AbstractBackground/BlurGradientBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type BlurGradientBgProps = {
  noise?: number
} & BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const BlurGradientBg = forwardRef<HTMLDivElement, BlurGradientBgProps>(({
  colors, seed, loop, noise,
  ...rest
}, ref) => {
  const id = useId()

  const onCreate = useCallback(() => {
    const background = new Background({ dom: id, colors, seed, loop })
    if (typeof noise === 'number') {
      background.update('noise', noise)
    }
    return background
  }, [id, colors, seed, loop, noise])

  useBackground(onCreate)

  return <div {...rest} id={id} ref={ref} />
})

export default BlurGradientBg
