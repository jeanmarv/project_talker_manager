const fs = require('fs');

const geTalker = 'talker.json';

const talkerjson = (file) => {
  const getdata = fs.readFile(file, 'utf-8')
  .then((deita) => JSON.parse(deita));
  return getdata;
};

const getTalkerJson = talkerjson(geTalker);

const postTalk = (req, res) => {
  const { name, age, talk } = req.body;
  const nextID = getTalkerJson.length + 1;
  getTalkerJson.push({ id: nextID, name, age, talk });
  fs.writeFileSync(geTalker, JSON.stringify(getTalkerJson, null, 2));
  return res.status(201).json({ id: nextID, name, age, talk });
};
module.exports = postTalk;