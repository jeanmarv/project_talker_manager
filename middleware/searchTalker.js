const readFiles = require('../externals/readfiles');

const searchTalker = (req, res) => {
  const talker = './talker.json';
  const readTalker = readFiles(talker);
  const { search } = req.query;
  const filtered = readTalker.filter((person) => person.name.includes(search));
  return res.status(200).json(filtered);
};

module.exports = searchTalker;
