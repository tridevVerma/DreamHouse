import DetailedProperty from "../models/detailedProperty.js";
const sellerProperties = async (req, res) => {
  try {
    const data = await DetailedProperty.find({ seller: req.query.name });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal error");
  }
};

export default sellerProperties;
