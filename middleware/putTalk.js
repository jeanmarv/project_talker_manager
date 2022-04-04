const readFiles = require('../externals/readfiles');
const writeFiles = require('../externals/writefiles');

const putTalk = (req, res) => {
  const talker = './talker.json';
  const readTalker = readFiles(talker);
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const found = readTalker.findIndex((person) => person.id === parseInt(id, 10));
  readTalker[found] = { ...readTalker[found], name, age, talk };
  writeFiles(talker, readTalker);
  return res.status(200).json({ id, name, age, talk });
};

module.exports = putTalk;
