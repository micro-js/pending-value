/**
 * Imports
 */

var pendingValue = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var pv = pendingValue()

  pv.value().then(function (value) {
    t.equal(value, 5)
  })

  pv.ready(5)
  pv.pending()

  pv.value().then(function (value) {
    t.equal(value, 2)
  })

  pv.ready(2)

  t.end()
})
