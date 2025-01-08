<h1 align="center">
  <img src="assets/header.svg" alt="Meta" width="100%">
</h1>

# react-color4bg

React component wrapper of [color4bg.js](https://github.com/winterx/color4bg.js) written in TypeScript.

> **color4bg.js**  
> Super easily generate dynamic, abstract, and visually stunning background images for your web pages based on WebGL and JavaScript. High performance.

## Get Started

1.install `react-color4bg`

```bash
npm i react-color4bg
```

2.Import the component into your project.

```jsx
<BlurGradientBg
  style={{ width: '100%', height: '100%' }}
  colors={["#D1ADFF","#98D69B","#FAE390","#FFACD8","#7DD5FF","#D1ADFF"]}
  loop
/>
```

## Component Props

All components have three identical properties:

### colors

type: `string[]`

> An array of hex colors of any length, used to describe the color combination of the background.

### seed

type: `number`

> The seed used to generate the background, default is 1000.

### loop

type: `boolean`

> A flag to control whether the background animation is enabled.

Some components have additional properties, which can be viewed through TypeScript's type completion.
