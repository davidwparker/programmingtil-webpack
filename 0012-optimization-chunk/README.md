## STARTING OFF:

Make sure you have npm installed.

Install dependencies:
```
$ npm install
```

Run:
```
$ npm run compile
```

## CONCEPTS:

webpack optimization chunk

Minimization (flags):

* --optimize-max-chunks {n}
* --optimize-min-chunk-size {n}

Plugins, which we'll look at another time:

* webpack.optimize.LimitChunkCountPlugin({maxChunks: n})
  * Limit the maximum chunk count.
  * Limit the chunk count to a defined value.
  * Chunks are merged until it fits.
* webpack.optimize.MinChunkSizePlugin({minChunkSize: n})
  * Limit the maximum chunk size.
  * Merge small chunks that are lower than this min size (in chars).
  * Size is approximated.

## RESOURCES:

* https://github.com/davidwparker/programmingtil-webpack/tree/master/0012-optimization-chunk
* http://webpack.github.io/docs/optimization.html
