import { data } from "../../../asset/allPropertiesData.js";
import Properties from "../../models/properties.js";
const loadAllProperties = async (req, res) => {
  try {
    await Properties.deleteMany({});
    await Properties.insertMany(data);
    console.log("Data Stored to DB Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("internal error");
  }
};

export default loadAllProperties;
