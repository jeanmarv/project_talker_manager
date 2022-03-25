const validatepass = (req, res, next) => {
  const { password } = req.body;
  if (!password || password === '') {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!password.lenght > 6) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};
module.exports = validatepass;