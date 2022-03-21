const fs = require('fs/promises');

const geTalker = 'talker.json';

const talker = async (req, res) => {
  const getdata = await fs.readFile(geTalker, 'utf-8')
  .then((deita) => JSON.parse(deita));
  return res.status(200).json(getdata);
};

module.exports = talker;
