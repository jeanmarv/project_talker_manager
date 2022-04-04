const fs = require('fs');

function readFiles(file) {
  const read = fs.readFileSync(file, 'utf8');
  const readjson = JSON.parse(read);
  return readjson;
}

module.exports = readFiles;