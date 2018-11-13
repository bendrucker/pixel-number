# pixel-number [![Build Status](https://travis-ci.org/bendrucker/pixel-number.svg?branch=master)](https://travis-ci.org/bendrucker/pixel-number) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/pixel-number.svg)](https://greenkeeper.io/)

> Cast numbers to CSS pixel strings


## Install

```
$ npm install --save pixel-number
```


## Usage

```js
var pixel = require('pixel-number')

pixel(10)
//=> 10px

pixel('10em')
//=> 10em
```

## API

#### `pixel(input)` -> `string`

##### input

*Required*  
Type: `number`

A number to be transformed into a pixel string. Strings are returned unchanged.


## License

MIT © [Ben Drucker](http://bendrucker.me)
