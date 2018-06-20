const fs = require("fs");
var format = require("xml-formatter");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var xml = "";
var filePath = "";
//Callback of the fs.readFile were all the logic is
var onReadFile = function(err, data) {
  //we use the stack to keep track of the tags
  var stack = [];
  //the data is given as buffer
  var input = data.toString();
  if (err) {
    return 1;
  }

  var iterations = (input.match(new RegExp("\n", "g")) || []).length - 1;

  for (var i = 0; i < iterations; i++) {
    let tab = (
      input.substring(0, input.indexOf("\n")).match(new RegExp("\t", "g")) || []
    ).length;
    let nextTab = (
      input
        .substring(input.indexOf("\n") + 1)
        .substring(0, input.indexOf("\n"))
        .match(new RegExp("\t", "g")) || []
    ).length;
    let tag = input.substring(0, input.indexOf("\n")).replace(/\t/g, "");

    xml = xml + "<" + tag + ">";

    if (tab >= nextTab && tab != 0) {
      for (var i = 0; i < tab - nextTab + 1; i++) {
        xml = xml + "</" + stack.pop() + ">";
      }
    }

    stack.push(tag);

    input = input.substring(input.indexOf("\n") + 1);
  }
  console.log("conversion done");
  fs.writeFile(filePath + ".xml", format(xml), function functionName(err) {
    if (err) {
      console.log("error = " + err);
    }
    console.log("file written");
  });
};

rl.question("insert file path with file name without .txt\n", fileP => {
  filePath = fileP;
  fs.readFile(fileP + ".txt", onReadFile);
  rl.close();
});
