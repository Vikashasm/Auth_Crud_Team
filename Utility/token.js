var jwt = require("jsonwebtoken");

exports.generateAccessToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const secret = process.env.SECRET_KEY_FOR_TOKEN;
  const options = { expiresIn: "1D" };

  return jwt.sign(payload, secret, options);
};


exports.verifyAccessToken=(token)=>{
  const secret = process.env.SECRET_KEY_FOR_TOKEN

  try {
    const decoded = jwt.verify(token, secret);
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, error: error.message };
  }
}