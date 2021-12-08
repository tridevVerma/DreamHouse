import bcrypt from "bcryptjs";
import User from "../models/newUserSchema.js";

const loginUser = async (req, res) => {
  try {
    let mobileExist, emailExist;
    if (Number(req.body.emailORPhone))
      mobileExist = await User.findOne({
        mobileno: Number(req.body.emailORPhone),
      });
    else emailExist = await User.findOne({ email: req.body.emailORPhone });
    if (mobileExist || emailExist) {
      let userFound;
      let userIdentified;
      if (mobileExist) {
        userFound = await bcrypt.compare(req.body.pass, mobileExist.PWD);
        userIdentified = mobileExist;
      } else {
        userFound = await bcrypt.compare(req.body.pass, emailExist.PWD);
        userIdentified = emailExist;
      }

      if (userFound) {
        console.log("Successfull login");
        const { _id, PWD, ...userData } = userIdentified._doc;
        res.status(200).send(userData);
      } else {
        console.log("Wrong Password");
        res.status(403).send("Wrong Password");
      }
    } else {
      res.status(404).send("User not found");
      console.log("User not found");
    }
  } catch (error) {
    res.status(500).send("Internal Error");
    console.log(error);
  }
};

export default loginUser;
