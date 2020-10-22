const util = require("util");

const helloPluto = util.deprecate(() => {
    console.log("Hello pluto");
}, "Pluto esta deprecado, ya no es un planta.");

helloPluto();

// node --inspect util-deprecate.js