import { forwardRef, useCallback, useMemo } from 'react'
import { v1 as uuidV1 } from 'uuid'
import { BlurDotBg as Background } from 'color4bg/src/color4bg/AbstractBackground/BlurDotBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type BlurDotBgProps = BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const BlurDotBg = forwardRef<HTMLDivElement, BlurDotBgProps>(({
  colors, seed, loop,
  ...rest
}, ref) => {
  const id = useMemo(() => uuidV1(), [])

  const onCreate = useCallback(() => {
    return new Background({ dom: id, colors, seed, loop })
  }, [id, colors, seed, loop])

  useBackground(onCreate)

  return <div {...rest} id={id} ref={ref} />
})

export default BlurDotBg

