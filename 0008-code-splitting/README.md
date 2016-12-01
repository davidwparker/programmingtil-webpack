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

Outputs two files/chunks:

* `output.js` is the entry chunk and contains
  * the module system
  * chunk loading logic
  * the entry point `example.js`
  * module `a`
  * module `b`
* `1.js` is an additional chunk (on demand loaded) and contains
  * module `c`
  * module `d`

You can see that chunks are loaded via JSONP.

## RESOURCES:

* https://github.com/davidwparker/programmingtil-webpack/tree/master/0008-code-splitting
* http://webpack.github.io/docs/code-splitting.html
* https://github.com/webpack/webpack/tree/master/examples/code-splitting
