'use strict'

module.exports = function toPixels (number) {
  return number + (typeof number === 'number' ? 'px' : '')
}
