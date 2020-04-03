var fs = require('fs');

var filename = 'foo_bar.json';

fs.readFile(filename , 'utf8', function(err, data) {
  if (err) throw err;
  let js_obj = JSON.parse(data);
  console.log('OK: ' + filename);
  console.log(js_obj)
});
