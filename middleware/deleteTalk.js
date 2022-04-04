const readFiles = require('../externals/readfiles');
const writeFiles = require('../externals/writefiles');

const deleteTalk = (req, res) => {
  const talker = './talker.json';
  const readTalker = readFiles(talker);
  const { id } = req.params;
  const found = readTalker.findIndex((person) => person.id === parseInt(id, 10));
  readTalker.splice(found, 1);
  writeFiles(talker, readTalker);
  return res.status(204).end();
};

module.exports = deleteTalk;
