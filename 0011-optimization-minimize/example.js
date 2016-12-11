// Example
var a = require("./a");
var b = require("./b");
// This means: make it available, but don't execute it webpack will load it on demand
require.ensure(["./c"], function(require) {
// `b` and `d` are required via CommonJs in the `require.ensure` callback
//   webpack detects that these are in the on-demand-callback and will load
//   them on demand webpacks optimizer can optimize `b` away as it is already
//   available through the parent chunks
  require("./b").xyz();
  var d = require("./d");
});
