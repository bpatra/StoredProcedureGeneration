var storedProcedureFileName = 'myStoredProcedure';
var standaloneBundleName = storedProcedureFileName + '_standalone.js';
var finalStoredProcedureFileName = storedProcedureFileName + "_standalone_entrypoint.js";

//step1: generate the standalone system-js bundled...
var Builder = require('systemjs-builder');

var outdir = './';
var configFile = './config.js';
var builder = new Builder(outdir, configFile);

builder.buildStatic(storedProcedureFileName, standaloneBundleName, { minify: false }).then(function () {
    //step2: patch to have a simple basic entry point function
    var fs = require('fs');

    var data = fs.readFileSync(standaloneBundleName, 'utf-8');
    var newValue = "function entry_point(){ \n"
    newValue += "global = this; \n"; //set the global variable for systemjs builder (in documentdb no self or global object)
    newValue += "global.storedProcedureArgs = arguments; \n" //take function arguments and pushed them in global object
    newValue += data;
    newValue += "\n";
    newValue += "}"
    fs.writeFileSync(finalStoredProcedureFileName, newValue, 'utf-8');
}, function () {
    throw Error("Cannot generate systemjs bundle")
});


