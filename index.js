const express = require('express');
const bodyParser = require('body-parser');
const talkerCont = require('./controller/talker');
const talkeridCont = require('./controller/talkerID');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', talkerCont);

app.get('/talker/:id', talkeridCont);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
