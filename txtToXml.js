const fs = require("fs");
var format = require('xml-formatter');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('insert file path with file name without .txt\n', (filePath) => {

  var xml = "";
  var tabulation = function (num) {
    let str = "";
    for (var i = 0; i < num; i++) {
        str += "\t";
      }
      return str;
  }
  var onReadFile = function(err, data){
    var stack = [];
    var input = data.toString();
    if(err){
      return 1;
    }

    var iterations = (input.match(new RegExp("\n", "g")) || []).length-1;

    for(var i = 0; i<iterations; i++){
        let tab = (input.substring(0,input.indexOf("\n")).match(new RegExp("\t", "g")) || []).length;
        let nextTab = (input.substring(input.indexOf("\n")+1).substring(0,input.indexOf("\n")).match(new RegExp("\t", "g")) || []).length
        let tag = input.substring(0,input.indexOf("\n")).replace(/\t/g,'')


        xml= xml  + "<"+tag+">";

        if(tab >= nextTab && tab != 0){
          for (var i = 0; i < tab-nextTab+1;i++) {
              xml= xml + "</"+stack.pop()+">";

          }
        }
        stack.push(tag);


      input = input.substring(input.indexOf("\n")+1);
    }
    console.log("conversion done");
    fs.writeFile(filePath + ".xml",format(xml),function functionName() {
      console.log("file written");
    })
  }
  fs.readFile(filePath+".txt", onReadFile);

  rl.close();
});
