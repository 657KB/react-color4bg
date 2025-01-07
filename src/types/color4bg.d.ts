type ColorBackgroundProps = {
  colors?: string[]
  seed?: number
  dom?: string | HTMLElement
  loop?: boolean
}

type AbstractShapeBgConstructorArgs = {
  noise?: number
} & ColorBackgroundProps

type AestheticFluidBgConstructorArgs = {
  radius_inner?: number,
  radius_outer?: number,
  noise?: number
} & ColorBackgroundProps

declare class ColorBg {
  constructor(props: ColorBackgroundProps)
  /**
   * Set colors.
   * 
   * If the number of colors passed in is less than the colors required by the background (BG), they are looped to fill;
   * 
   * If the number of colors passed in exceeds the colors required by the background (BG), the excess is trimmed.
   */
  colors(colors_list: string[]): void
  /**
   * Start background animation.
   */
  start(): void
  /**
   * Measure the dimensions of the mounted DOM element, then set its width and height to the canvas.
   */
  resize(): void
  /**
   * Destroy the current background instance, then create a new background instance with a new seed.
   */
  reset(seed: number): void
  /**
   * Destroy background instance.
   */
  destroy(): void
}

declare module 'color4bg/src/color4bg/AbstractBackground/AbstractShapeBg' {
  export class AbstractShapeBg extends ColorBg {
    constructor({ noise }: AbstractShapeBgConstructorArgs)
    update(option: 'noise' | 'wavy', val: number)
  }

  
}

declare module 'color4bg/src/color4bg/AbstractBackground/AestheticFluidBg' {
  export class AestheticFluidBg extends ColorBg {
    constructor({ radius_inner, radius_outer, noise }: AestheticFluidBgConstructorArgs)
    update(option: 'scale', val: number)
  }

  
}
