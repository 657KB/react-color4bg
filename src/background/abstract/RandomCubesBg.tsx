import { forwardRef, useCallback, useId } from 'react'
import { RandomCubesBg as Background } from 'color4bg/src/color4bg/AbstractBackground/RandomCubesBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type RandomCubesBgProps = BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const RandomCubesBg = forwardRef<HTMLDivElement, RandomCubesBgProps>(({
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

export default RandomCubesBg
