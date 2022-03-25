const fs = require('fs/promises');

const geTalker = 'talker.json';

const talkerid = async (req, res) => {
  const { id } = req.params;
  const getdata = await fs.readFile(geTalker, 'utf-8')
  .then((deita) => JSON.parse(deita));
  const found = getdata.find((v) => v.id === parseInt(id, 10));
  if (!found) {
    return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(found);
};

module.exports = talkerid;