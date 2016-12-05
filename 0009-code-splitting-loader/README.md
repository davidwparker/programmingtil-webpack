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

webpack code splitting

This example combines Code Splitting and Loaders.

The bundle loader is used to create a wrapper module for a.js that loads this module on demand.
The wrapper module returns a function that can be called to asynchronously receive the inner module.

## RESOURCES:

* https://github.com/davidwparker/programmingtil-webpack/tree/master/0009-code-splitting-loader
* http://webpack.github.io/docs/code-splitting.html
* https://github.com/webpack/webpack/tree/master/examples/code-splitting-bundle-loader
