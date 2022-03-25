function generateToken(n) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';
  for (let i = 0; i < n; i += 1) {
      token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}

module.exports = generateToken;
