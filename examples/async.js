const fs = require('fs');

console.log(1);
var data = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(data);
console.log("Synchronous Read");

console.log(2);
var data2 = fs.readFile('data.txt', {
  encoding: 'utf8'
}, function(err, data) {
  console.log(3);
  if (err != null)
    console.log("Error: " + err);
  else
    console.log(data)
});

console.log(4);
console.log("Done");
