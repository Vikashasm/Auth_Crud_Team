const user = require("../Model/auth");
const { passwordHash, comparePassword } = require("../Utility/passwordHash");
const Token = require("../Utility/token");

const generateAccessToken = Token.generateAccessToken;
const verifyAccessToken = Token.verifyAccessToken;

exports.createUser = async (req, res) => {
  const userData = new user(req.body);
  userData.password = await passwordHash(req.body.password);

  try {
    const response = await userData.save();
    response.password = undefined;
    return res.status(201).json({ messsage: "success", data: response });
  } catch (error) {
    if (error.code == 11000 && error.keyPattern.email == 1) {
      return res
        .status(400)
        .json({ messsage: "Email Already exist", error: error });
    }
    return res.status(400).json({ messsage: "error", error: error });
  }
};
exports.loginUser = async (req, res) => {
  try {
    const userdata = await user.findOne({ email: req.body.email });

    //checking User existance
    if (!userdata) {
      return res.status(401).json({
        messsage: "Authentication Failed, Invalid Email/Password",
        error: error,
      });
    }
    //checking Password match
    const isPassEqual = await comparePassword(
      req.body.password,
      userdata.password
    );
    if (!isPassEqual) {
      return res.status(401).json({
        messsage: "Authentication Failed, Invalid Email/Password",
        error: error,
      });
    }

    //Sending Token
    const token = generateAccessToken(userdata);

    return res.status(201).json({ messsage: "success", token: token });

    
  } catch (error) {
    return res.status(400).json({ messsage: "error", error: error });
  }
};
