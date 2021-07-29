import Properties from "../models/properties.js";
const allProperties = async (req, res) => {
  try {
    const data = await Properties.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal error");
  }
};

export default allProperties;
