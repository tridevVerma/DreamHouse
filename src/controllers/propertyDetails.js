import DetailedProperty from "../models/detailedProperty.js";
const propertyDetails = async (req, res) => {
  try {
    const data = await DetailedProperty.find({ propertyID: req.query.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal error");
  }
};

export default propertyDetails;
