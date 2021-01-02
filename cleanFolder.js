var rimraf = require("rimraf")
rimraf("./mochawesome-report", function () { console.log("Pasta mochawesome-report apagada"); });
rimraf("./cypress/cucumber-json", function () { console.log("Pasta cucumber-json apagada"); });