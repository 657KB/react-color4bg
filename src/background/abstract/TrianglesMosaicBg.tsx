import { forwardRef, useCallback, useMemo } from 'react'
import { v1 as uuidV1 } from 'uuid'
import { TrianglesMosaicBg as Background } from 'color4bg/src/color4bg/AbstractBackground/TrianglesMosaicBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type TrianglesMosaicBgProps = {
  noise?: number
  speed?: number
  factor?: number
} & BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const TrianglesMosaicBg = forwardRef<HTMLDivElement, TrianglesMosaicBgProps>(({
  colors, seed, loop,
  noise, speed, factor,
  ...rest
}, ref) => {
  const id = useMemo(() => uuidV1(), [])

  const onCreate = useCallback(() => {
    const background = new Background({ dom: id, colors, seed, loop })
    if (typeof noise === 'number') {
      background.update('noise', noise)
    }
    if (typeof speed === 'number') {
      background.update('speed', speed)
    }
    if (typeof factor === 'number') {
      background.update('factor', factor)
    }
    return background
  }, [id, colors, seed, loop, noise, speed, factor])

  useBackground(onCreate)

  return <div {...rest} id={id} ref={ref} />
})

export default TrianglesMosaicBg
