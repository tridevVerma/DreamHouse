import { allNewsData } from "../../asset/allNewsData.js";

const allNews = (req, res) => {
  try {
    res.status(200).json(allNewsData);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal error");
  }
};

export default allNews;
