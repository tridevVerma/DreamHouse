import { detailsData } from "../../../asset/detailsData.js";
import DetailedProperty from "../../models/detailedProperty.js";
const loadPropertyDetails = async () => {
  try {
    await DetailedProperty.deleteMany({});
    await DetailedProperty.insertMany(detailsData);
    console.log("Details Data Stored to DB Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default loadPropertyDetails;
