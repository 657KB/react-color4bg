import { forwardRef, useCallback, useMemo } from 'react'
import { v1 as uuidV1 } from 'uuid'
import { AestheticFluidBg as Background } from 'color4bg/src/color4bg/AbstractBackground/AestheticFluidBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type AestheticFluidBgProps = {
  radius_inner?:number
  radius_outer?:number
  noise?: number
  scale?: number
} & BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const AestheticFluidBg = forwardRef<HTMLDivElement, AestheticFluidBgProps>(({
  colors, seed, loop, radius_inner, radius_outer, noise, scale,
  ...rest
}, ref) => {
  const id = useMemo(() => uuidV1(), [])

  const onCreate = useCallback(() => {
    const background = new Background({ dom: id, colors, seed, loop, radius_inner, radius_outer, noise })
    if (typeof scale === 'number') {
      background.update('scale', scale)
    }
    return background
  }, [id, colors, seed, loop, radius_inner, radius_outer, noise, scale])

  useBackground(onCreate)

  return <div {...rest} id={id} ref={ref} />
})

export default AestheticFluidBg

