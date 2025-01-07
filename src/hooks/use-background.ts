import { useEffect, useRef } from 'react'

export const useBackground = <T extends ColorBg>(onCreate: () => T, afterCreate: ((instance: T) => void) | null = null) => {
  const backgroundRef = useRef<T | null>(null)
  const afterCreateRef = useRef(afterCreate)

  useEffect(() => {
    backgroundRef.current = onCreate()

    if (afterCreateRef.current !== null) {
      afterCreateRef.current(backgroundRef.current)
    }

    return () => {
      if (backgroundRef.current !== null) {
        backgroundRef.current.destroy()
        backgroundRef.current = null
        afterCreateRef.current = null
      }
    }
  }, [onCreate])

  useEffect(() => {
    afterCreateRef.current = afterCreate
  }, [afterCreate])
}