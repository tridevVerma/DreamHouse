import mongoose from "mongoose";
import validator from "validator";
const newUserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-z ]{2,20}$/i.test(v);
      },
      message: "{VALUE} is not a valid name!",
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: function (v) {
        return validator.isEmail(v);
      },
      message: "{VALUE} is not a valid Email!",
    },
  },
  mobileno: {
    type: Number,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: "{VALUE} is not a valid 10 digit number!",
    },
  },
  PWD: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /[a-zA-Z0-9_@!&$-]{5,}/.test(v);
      },
      message: "{VALUE} is not a valid password!",
    },
  },
});

const User = mongoose.model("Users", newUserSchema);

export default User;
