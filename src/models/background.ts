export type BaseBackgroundProps = {
  colors?: string[]
  seed?: number
  loop?: boolean
  onInit?: <T extends ColorBg>(instance: T) => void
}