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

webpack optimization minimizing

Minimization (flags):

* --optimize-minimize
* --optimize-occurrence-order

Many plugins, which we'll look at another time:

* webpack.optimize.UglifyJsPlugin
  * Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode.
* webpack.optimize.OccurrenceOrderPlugin
  * Assign the module and chunk ids by occurrence count. Ids that are used often get lower (shorter) ids.

## RESOURCES:

* https://github.com/davidwparker/programmingtil-webpack/tree/master/0011-optimization-minimize
* http://webpack.github.io/docs/optimization.html
