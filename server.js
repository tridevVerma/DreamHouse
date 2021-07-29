import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import loadAllProperties from "./src/controllers/loadingData/loadAllProperties.js";
import loadPropertyDetails from "./src/controllers/loadingData/loadPropertyDetails.js";
import propertiesRoute from "./src/routes/propertiesRoute.js";
import newsRoute from "./src/routes/newsRoute.js";
import detailsRoute from "./src/routes/detailsRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/projects", propertiesRoute);
app.use("/news", newsRoute);
app.use("/details", detailsRoute);

const URL = process.env.MONGODB_URL || process.env.DB_URL;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server at http://localhost:${port}`);
    });
    loadAllProperties();
    loadPropertyDetails();
  })
  .catch((err) => {
    console.log(err.message);
  });
