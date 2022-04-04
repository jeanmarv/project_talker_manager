const fs = require('fs');

function writeFiles(override, newfile) {
  return fs.writeFileSync(override, JSON.stringify(newfile, null, 2));
}

module.exports = writeFiles;