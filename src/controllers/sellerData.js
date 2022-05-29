import User from "../models/newUserSchema.js";

const sellerData = async (req, res) => {
  try {
    const data = await User.find({ name: req.query.name });
    res.status(200).json(data[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal error");
  }
};

export default sellerData;
