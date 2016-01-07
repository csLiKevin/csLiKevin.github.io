var fs = require("fs");

fs.createReadStream("input/base.json").pipe(fs.createWriteStream("output/resume.json"));
