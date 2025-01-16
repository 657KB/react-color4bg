import { forwardRef, useCallback, useId } from 'react'
import { BigBlobBg as Background } from 'color4bg/src/color4bg/AbstractBackground/BigBlobBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type BigBlobBgProps = BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const BigBlobBg = forwardRef<HTMLDivElement, BigBlobBgProps>(({
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

export default BigBlobBg

