/**
 * Expose pendingValue
 */

module.exports = pendingValue

/**
 * pendingValue
 */

function pendingValue () {
  var q
  var resolve
  pending()

  return {
    pending: pending,
    ready: function (value) {
      resolve(value)
    },
    value: function () {
      return q
    }
  }

  function pending () {
    q = new Promise(function (_resolve) { resolve = _resolve })
  }
}
