import { forwardRef, useCallback, useId } from 'react'
import { BlurDotBg as Background } from 'color4bg/src/color4bg/AbstractBackground/BlurDotBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type BlurDotBgProps = BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const BlurDotBg = forwardRef<HTMLDivElement, BlurDotBgProps>(({
  colors, seed, loop,
  ...rest
}, ref) => {
  const id = useId()

  const onCreate = useCallback(() => {
    return new Background({ dom: id, colors, seed, loop })
  }, [id, colors, seed, loop])

  useBackground(onCreate)

  return <div {...rest} id={id} ref={ref} />
})

export default BlurDotBg

