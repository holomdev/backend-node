const util = require("util");

// %s = string
// %d = numero
// %j = Json

console.log("Un %s y un %s", "perrito", "gatito");
console.info("hello world");
console.warn("hola munod");

console.assert(42 == "42");
console.assert(42 === "42");

//console.trace("Un trace");
const debuglog = util.debuglog("foo");
debuglog("hello from foo");