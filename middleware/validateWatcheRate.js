// ^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$
// https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy regex para datas dd/mm/aa
// lint estava reclamando desse regex entao peguei com o gustavo dalmoro esse = ^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$

const validateDate = (date) => {
  const regex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/i;
  return regex.test(date);
};

const validateWatchRate = (req, res, next) => {
  const { watchedAt, rate } = req.body.talk;
  if (rate < 1 || rate > 5) {
    return res.status(400).json(
      { message: 'O campo "rate" deve ser um inteiro de 1 à 5' },
      );
  }
  if (validateDate(watchedAt) === false) {
    return res.status(400).json(
      { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
      );
  }
  next();
};
module.exports = validateWatchRate;