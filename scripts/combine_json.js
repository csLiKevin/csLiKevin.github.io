var fs = require("fs");
var extend = require("extend");

var baseJson = JSON.parse(fs.readFileSync("input/base.json", "utf8"));
var contactInfo = JSON.parse(fs.readFileSync("input/contact_info.json", "utf8"));

fs.writeFileSync("output/resume.json", JSON.stringify(extend(true, baseJson, contactInfo), null, 2));
