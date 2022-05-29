import bcrypt from "bcryptjs";
import User from "../models/newUserSchema.js";

const registerUser = async (req, res) => {
  try {
    const mobileExist = await User.findOne({ mobileno: req.body.mobileno });
    const emailExist = await User.findOne({ email: req.body.email });

    if (mobileExist || emailExist) {
      console.log("User exists");
      return res.status(401).json("User already exists");
    }

    console.log(req.body);
    //Hashing Password
    let { PWD, ...userData } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(PWD, salt);
    PWD = hash;

    //Registering New User
    const newUser = await new User({ ...userData, PWD });
    const result = await newUser.save();
    res.status(201).json("User is successfully registered");
    console.log(result);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export default registerUser;
