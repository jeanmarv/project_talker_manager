const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(401).json({ message: 'O campo "age" é obrigatório' });
  }
  if (Number(age) < 18) {
    return res.status(401).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

module.exports = validateAge;