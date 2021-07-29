import Properties from "../models/properties.js";
import organizeQuery from "./organizeQuery.js";
const filterByPropeties = async (req, res) => {
  try {
    const queryArr = req.query.filtersQuery;
    let data = [];
    if (queryArr) {
      const query = organizeQuery(queryArr);
      console.log(query);

      data = await Properties.find({
        $and: query,
      });
    } else {
      data = await Properties.find({});
    }
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal error");
  }
};

export default filterByPropeties;
