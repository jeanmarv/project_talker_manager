const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
const geTalker = 'talker.json';

app.get('/talker', async (req, res) => {
  const data = await fs.readFile(geTalker, 'utf-8').then((deita) => JSON.parse(deita));
  return res.status(HTTP_OK_STATUS).json(data);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile(geTalker, 'utf-8').then((deita) => JSON.parse(deita));
  const found = data.find((v) => v.id === parseInt(id, 10));
  if (!found) {
    return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(found);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
