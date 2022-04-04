const generatetoken = require('../externals/generatetoken');

const generatedToken = generatetoken(16);
const login = (req, res) => 
res.status(200).json({ token: `${generatedToken}` });

module.exports = login;