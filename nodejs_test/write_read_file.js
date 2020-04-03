var fs = require('fs');

var filename = 'tmp.txt';

var data = "hello world!";

fs.writeFile(filename, data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});

fs.readFile(filename , 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  console.log(data)
});
