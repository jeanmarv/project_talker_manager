const express = require('express');
const bodyParser = require('body-parser');
const talkerCont = require('./controller/talker');
const talkeridCont = require('./controller/talkerID');
const login = require('./middleware/login');
const validatemail = require('./middleware/validatemail');
const validatepass = require('./middleware/validatepassword');
const validatetoken = require('./middleware/validatetoken');
const validatePostName = require('./middleware/validatePostName');
const validatePostage = require('./middleware/validatePostAge');
const validateTalk = require('./middleware/validateTalk');
const validateWatchRate = require('./middleware/validateWatcheRate');
const postTalk = require('./middleware/postTalk');
const putTalk = require('./middleware/putTalk');
const deleteTalk = require('./middleware/deleteTalk');
const searchTalker = require('./middleware/searchTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200; 
const PORT = '3000';

app.get('/talker', talkerCont);

app.get('/talker/search', validatetoken, searchTalker);

app.get('/talker/:id', talkeridCont);

app.post('/login', validatemail, validatepass, login);

app.post('/talker', validatetoken, 
validatePostName, validatePostage, 
validateTalk, validateWatchRate, postTalk);

app.put('/talker/:id', validatetoken, validatePostName,
validatePostage, validateTalk, validateWatchRate, putTalk);

app.delete('/talker/:id', validatetoken, deleteTalk);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
