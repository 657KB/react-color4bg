import { forwardRef, useCallback, useMemo } from 'react'
import { v1 as uuidV1 } from 'uuid'
import { AbstractShapeBg as Background } from 'color4bg/src/color4bg/AbstractBackground/AbstractShapeBg'
import type { BaseBackgroundProps } from '@/models/background'
import { useBackground } from '@/hooks/use-background'

type AbstractShapeBgProps = { noise?: number, wavy?: number } & BaseBackgroundProps & React.HTMLAttributes<HTMLDivElement>

const AbstractShapeBg = forwardRef<HTMLDivElement, AbstractShapeBgProps>(({
  colors, seed, loop, noise, wavy, onInit,
  children, ...rest
}, ref) => {
  const id = useMemo(() => uuidV1(), [])

  const onCreate = useCallback(() => {
    const background = new Background({ dom: id, colors, seed, loop, noise })
    if (typeof wavy === 'number') {
      background.update('wavy', wavy)
    }
    return background
  }, [id, colors, seed, loop, noise, wavy])

  useBackground(onCreate, onInit)

  if (children) {
    return (
      <div {...rest} style={{ position: 'relative' }} ref={ref}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div id={id} />
        </div>
        {children}
      </div>
    )
  }

  return <div {...rest} id={id} ref={ref} />
})

export default AbstractShapeBg
