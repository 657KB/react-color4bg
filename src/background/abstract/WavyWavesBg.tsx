import { forwardRef, useCallback, useMemo } from 'react'
import { v1 as uuidV1 } from 'uuid'
import { WavyWavesBg as Background } from 'color4bg/src/color4bg/AbstractBackground/WavyWavesBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type WavyWavesBgProps = BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const WavyWavesBg = forwardRef<HTMLDivElement, WavyWavesBgProps>(({
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

export default WavyWavesBg
