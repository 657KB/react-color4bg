type ColorBackgroundConstructorArgs = {
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

type AmbientLightBgConstructorArgs = ColorBackgroundConstructorArgs

type BigBlobBgConstructorArgs = ColorBackgroundConstructorArgs

type BlurDotBgConstructorArgs = ColorBackgroundConstructorArgs

type BlurGradientBgConstructorArgs = ColorBackgroundConstructorArgs

declare class ColorBg {
  constructor({ colors, seed, dom, loop }: ColorBackgroundConstructorArgs)
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
   * Reset background with a new seed.
   */
  reset(seed?: number): void
  /**
   * Destroy background instance.
   */
  destroy(): void
}

declare module 'color4bg/src/color4bg/AbstractBackground/AbstractShapeBg' {
  export class AbstractShapeBg extends ColorBg {
    constructor(args: AbstractShapeBgConstructorArgs)
    update(option: 'noise' | 'wavy', val: number)
  }
}

declare module 'color4bg/src/color4bg/AbstractBackground/AestheticFluidBg' {
  export class AestheticFluidBg extends ColorBg {
    constructor(args: AestheticFluidBgConstructorArgs)
    update(option: 'scale', val: number)
  }
}

declare module 'color4bg/src/color4bg/AbstractBackground/AmbientLightBg' {
  export class AmbientLightBg extends ColorBg {
    constructor(args: AmbientLightBgConstructorArgs)
    update(option: 'noise' | 'speed' | 'pattern scale' | 'edge blur' | 'brightness' | 'darkness', val: number)
  }
}

declare module 'color4bg/src/color4bg/AbstractBackground/BigBlobBg' {
  export class BigBlobBg extends ColorBg {
    constructor(args: BigBlobBgConstructorArgs)
  }
}

declare module 'color4bg/src/color4bg/AbstractBackground/BlurDotBg' {
  export class BlurDotBg extends ColorBg {
    constructor(args: BlurDotBgConstructorArgs)
  }
}

declare module 'color4bg/src/color4bg/AbstractBackground/BlurGradientBg' {
  export class BlurGradientBg extends ColorBg {
    constructor(args: BlurGradientBgConstructorArgs)
    update(option: 'noise', val: number)
  }
}
