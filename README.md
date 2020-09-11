![Node.js Package](https://github.com/CT1994/imagemin-pingo/workflows/Node.js%20Package/badge.svg)

# imagemin-pingo

[pingo](https://css-ig.net/pingo) — fast web image optimizer by Cédric Louvrier

## Install

```
$ npm install -save imagemin-pingo
```

## Usage

```js
const imagemin = require('imagemin');
const imageminPingo = require('imagemin-pingo');

imagemin(['images/*.png'], 'build/images', {use: [imageminPingo()]}).then(() => {
	console.log('Images optimized');
});
```

## API

### imageminPingo([options])(buffer)

Returns a promise for a buffer.

#### buffer

Type: `Buffer`

Buffer to optimize.

#### options

Type: `Object`

##### optimizationLevel

Type: `number`
Default: `3`

Select an optimization level between `1` and `9`.

> The optimization level determines how much optimization is done; higher levels take longer, but may have better results.
