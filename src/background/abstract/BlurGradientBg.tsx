import { forwardRef, useCallback, useMemo } from 'react'
import { v1 as uuidV1 } from 'uuid'
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
  const id = useMemo(() => uuidV1(), [])

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
