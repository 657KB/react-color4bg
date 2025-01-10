<h1 align="center">
  <img src="assets/header.png" alt="react-color4bg" width="100%">
</h1>

**About `color4bg.js`**

Super easily generate dynamic, abstract, and visually stunning background images for your web pages based on WebGL and JavaScript. High performance.

📦 [winterx/color4bg.js](https://github.com/winterx/color4bg.js)

🔗 [https://www.color4bg.com/](https://www.color4bg.com/)


# Get Started

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

# Component Props

All components have three identical properties (see below), Some components have additional properties, which can be viewed through TypeScript's type completion, You can visit [https://www.color4bg.com/](https://www.color4bg.com/) to view all available background types.

## colors

type: `string[]`

An array of up to 6 hexadecimal color values, used to describe the color combination of the background.

## seed

type: `number`

A Pseudo-random numerical value used to generate a consistent pattern, default is 1000.

## loop

type: `boolean`

Determines whether the background should animated looply or not.
