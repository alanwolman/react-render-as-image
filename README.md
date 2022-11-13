# react-render-as-image

A simple react HOC component to render child components in PNG.

This can be useful for various reasons:

- Allowing for elements created within a React page to be easily copied and shared in official company documents such as Word, Excel, etc.
- Allow for items generated online to be easily copied for later reference.

## How to use

To install this package execute the command:

`npm install react-render-as-image`

You can now import `react-render-as-image` from npm like so:

```
import RenderAsImage from 'react-render-as-image'
...
```

You can also import the type definitions if you're using TypeScript like so:

```
import RenderAsImage, { IRenderAsImageProps } from 'react-render-as-image'
...
```

To render React components as an image include the components as children of the RenderAsImage component as illustrated below:

```
<RenderAsImage height="500" alt="Hello World!">
    <div>Hello World!</div>
</RenderAsImage>
```

NOTE: RenderAsImage will only render the first child node - as such if you have multiple child nodes it will be necessary to enclose them in a containing div element.

## Available props

The following properties are passed through directly to the img element created by the component:

```

height: string (optional)
width: string (optional)
alt: string (optional)

```

## How it works

The component uses the NPM package html-to-image which can turn arbitrary DOM nodes into vector (SVG) or raster (PNG or JPEG) images.

## Roadmap

- Ability to save to JPEG
- Provide support for all of the properties provided by html-to-image
