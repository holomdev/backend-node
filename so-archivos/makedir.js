const fs = require("fs");

fs.mkdir("platzi/nodejs/", { recursive: true}, (err) => {
    if(err) {
        return console.log(err);
    }
});