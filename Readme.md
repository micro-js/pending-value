
# pending-value

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

A thin abstraction over promises that makes them retargetable, so that you can represent a single value that may be asynchronously computed and re-computed.

## Installation

    $ npm install @f/pending-value

## Usage

You should use `pendingValue` when you have a thing that may be recomputed or rebuilt over time, but you want to abstract that fact away from the code that uses it. For instance, watching a browserify bundle:

```js
var pendingValue = require('@f/pending-value')
var browserify = require('browserify')
var concat = require('concat-stream')
var watchify = require('watchify')
var route = require('koa-route')
var fs = require('fs')

var js = pendingValue()
var b = browserify({
  entries: 'entry.js',
  cache: {},
  packageCache: {},
  plugin: [watchify]
})

b.on('update', bundle)
bundle()

function bundle() {
  js.pending()
  b.bundle().pipe(concat(str = js.ready(str))
}

app.use(route.get('/bundle.js', function *() {
  this.body = yield js.value()
})
```

## API

### pendingValue()

**Returns:** An object with three methods. `pending()`, `ready(value)`, and `value()`. `pending()` puts the structure back into its loading state, blocking all requests for `value` until `ready` is called with a new value.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/pending-value.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/pending-value
[git-image]: https://img.shields.io/github/tag/micro-js/pending-value.svg
[git-url]: https://github.com/micro-js/pending-value
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/pending-value.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/pending-value
