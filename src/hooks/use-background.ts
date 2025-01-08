import { useEffect, useRef } from 'react'

export const useBackground = <T extends ColorBg>(onCreate: () => T) => {
  const backgroundRef = useRef<T | null>(null)

  useEffect(() => {
    backgroundRef.current = onCreate()
    return () => {
      if (backgroundRef.current !== null) {
        backgroundRef.current.destroy()
        backgroundRef.current = null
      }
    }
  }, [onCreate])

  useEffect(() => {
    const handler = () => backgroundRef.current?.resize()
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])
}