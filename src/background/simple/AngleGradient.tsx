import { forwardRef, useCallback, useId } from 'react'
import { Bg as Background } from 'color4bg/src/color4bg/SimpleBackground/AngleGradient'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type AngleGradientProps = BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const AngleGradient = forwardRef<HTMLDivElement, AngleGradientProps>(({
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

export default AngleGradient
