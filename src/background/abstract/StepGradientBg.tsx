import { forwardRef, useCallback, useMemo } from 'react'
import { v1 as uuidV1 } from 'uuid'
import { StepGradientBg as Background } from 'color4bg/src/color4bg/AbstractBackground/StepGradientBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type StepGradientBgProps = {
  size?: number
  spacing?: number
  noise?: number
} & BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const StepGradientBg = forwardRef<HTMLDivElement, StepGradientBgProps>(({
  colors, seed, loop, onInit,
  size, spacing, noise,
  ...rest
}, ref) => {
  const id = useMemo(() => uuidV1(), [])

  const onCreate = useCallback(() => {
    const background = new Background({ dom: id, colors, seed, loop })
    if (typeof size === 'number') {
      background.update('size', size)
    }
    if (typeof spacing === 'number') {
      background.update('spacing', spacing)
    }
    if (typeof noise === 'number') {
      background.update('noise', noise)
    }
    return background
  }, [id, colors, seed, loop, size, spacing, noise])

  useBackground(onCreate, onInit)

  return <div {...rest} id={id} ref={ref} />
})

export default StepGradientBg
