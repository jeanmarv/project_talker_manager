const readFiles = require('../externals/readfiles');

const searchTalker = (req, res) => {
  const talker = './talker.json';
  const readTalker = readFiles(talker);
  const { q } = req.query;
  const filtered = readTalker.filter((person) => person.name.toLowerCase().includes(q));
  if (!q) {
    return res.status(200).json(readTalker);
  }
  if (q.length === 0) {
    return res.status(200).json([]);
  } 
  return res.status(200).json(filtered);
};

module.exports = searchTalker;
