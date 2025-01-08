import { forwardRef, useCallback, useMemo } from 'react'
import { v1 as uuidV1 } from 'uuid'
import { RandomCubesBg as Background } from 'color4bg/src/color4bg/AbstractBackground/RandomCubesBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type RandomCubesBgProps = BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const RandomCubesBg = forwardRef<HTMLDivElement, RandomCubesBgProps>(({
  colors, seed, loop, onInit,
  ...rest
}, ref) => {
  const id = useMemo(() => uuidV1(), [])

  const onCreate = useCallback(() => {
    return new Background({ dom: id, colors, seed, loop })
  }, [id, colors, seed, loop])

  useBackground(onCreate, onInit)

  return <div {...rest} id={id} ref={ref} />
})

export default RandomCubesBg
