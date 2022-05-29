import DetailedProperty from "../models/detailedProperty.js";
import Properties from "../models/properties.js";
const addProperty = async (req, res) => {
  try {
    const newDetailedProperty = await new DetailedProperty(req.body);
    const result1 = await newDetailedProperty.save();

    let {
      image1,
      image2,
      image3,
      image4,
      garage,
      year,
      desc,
      mainImage,
      ...shortData
    } = req.body;
    const image = mainImage;
    const newProperty = await new Properties({ image, ...shortData });
    const result2 = await newProperty.save();

    res.status(201).json("Property is successfully added");
  } catch (error) {
    console.log(error);
    res.status(500).send("internal error");
  }
};

export default addProperty;
