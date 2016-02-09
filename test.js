'use strict'

var test = require('tape')
var pixel = require('./')

test(function (t) {
  t.equal(pixel(5), '5px')
  t.equal(pixel('5'), '5')
  t.equal(pixel('5em'), '5em')
  t.end()
})
