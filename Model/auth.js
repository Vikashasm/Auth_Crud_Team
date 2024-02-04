var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema(
  {
    firstName: { type: String, required: true, max: 20 }, // String is shorthand for {type: String}
    lastName: { type: String, required: true, max: 20 },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
    },
    password:String,
  },
  { timestamps: {} }
);


const user = mongoose.model("User", userSchema);
module.exports=user
