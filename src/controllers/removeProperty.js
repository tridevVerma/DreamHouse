import DetailedProperty from "../models/detailedProperty.js";
import Properties from "../models/properties.js";
const removeProperty = async (req, res) => {
  try {
    console.log(req.query);
    await DetailedProperty.deleteOne({ propertyID: req.query.id });
    await Properties.deleteOne({ propertyID: req.query.id });

    res.status(200).send("deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("internal error");
  }
};

export default removeProperty;
