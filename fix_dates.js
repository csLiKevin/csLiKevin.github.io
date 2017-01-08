"use strict";

// Fixes a bug where some themes add strange @@@@~ and ~@@@@ sequences to dates.
const readFileSync = require("fs").readFileSync;
const writeFileSync = require("fs").writeFileSync;

const indexHtmlFile = "index.html";
writeFileSync(
    indexHtmlFile,
    readFileSync(indexHtmlFile, "utf8").replace(/~?@@@@~?/g, "")
);
