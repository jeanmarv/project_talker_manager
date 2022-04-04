const readFiles = require('../externals/readfiles');
const writeFiles = require('../externals/writefiles');

const postTalk = (req, res) => {
  const talker = './talker.json';
  const readTalker = readFiles(talker);
  const { name, age, talk } = req.body;
  const nextID = readTalker.length + 1;
  readTalker.push({ id: nextID, name, age, talk });
  writeFiles(talker, readTalker);
  return res.status(201).json({ id: nextID, name, age, talk });
};

module.exports = postTalk;
