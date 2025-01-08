import { forwardRef, useCallback, useMemo } from 'react'
import { v1 as uuidV1 } from 'uuid'
import { ChaosWavesBg as Background } from 'color4bg/src/color4bg/AbstractBackground/ChaosWavesBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type ChaosWavesBgProps = {
  noise?: number
  speed?: number
} & BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const ChaosWavesBg = forwardRef<HTMLDivElement, ChaosWavesBgProps>(({
  colors, seed, loop, noise, speed, onInit,
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
    return background
  }, [id, colors, seed, loop, noise, speed])

  useBackground(onCreate, onInit)

  return <div {...rest} id={id} ref={ref} />
})

export default ChaosWavesBg
