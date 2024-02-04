const bcrypt = require("bcryptjs");

const passwordHash = async (password) => {
  const hashpass = await bcrypt.hash(password, 10);
  return hashpass;
};

const comparePassword = async (password, hashPassword) => {

  const valid = await bcrypt.compare(password, hashPassword);

  return valid;
};
module.exports = {
  passwordHash,
  comparePassword,
};
