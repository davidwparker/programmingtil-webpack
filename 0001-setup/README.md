## STARTING OFF:

Make sure you have npm installed.

Install webpack and http-server:
```
$ npm install webpack -g
$ npm install http-server -g
```

Run:
```
$ webpack ./entry.js bundle.js
$ http-server
```

View at: http://localhost:8080/

## CONCEPTS:

### webpack

* webpack takes modules with dependencies and generates static assets representing those modules.

### How is webpack different?

* Code Splitting
  * webpack has two types of dependencies in its dependency tree: sync and async. Async dependencies act as split points and form a new chunk. After the chunk tree is optimized, a file is emitted for each chunk.
* Loaders
  * webpack can only process JavaScript natively, but loaders are used to transform other resources into JavaScript. By doing so, every resource forms a module.
* Clever parsing
  * webpack has a clever parser that can process nearly every 3rd party library. It even allows expressions in dependencies like so require("./templates/" + name + ".jade"). It handles the most common module styles: CommonJs and AMD.
* Plugin system
  * pack features a rich plugin system. Most internal features are based on this plugin system. This allows you to customize webpack for your needs and distribute common plugins as open source.

## RESOURCES:

* https://github.com/davidwparker/programmingtil-webpack/tree/master/0001-setup
* http://webpack.github.io/docs/what-is-webpack.html
* http://webpack.github.io/docs/tutorials/getting-started/
