import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { MONGODB_URL } from "./db.js";

import loadAllProperties from "./src/controllers/loadingData/loadAllProperties.js";
import loadPropertyDetails from "./src/controllers/loadingData/loadPropertyDetails.js";
import propertiesRoute from "./src/routes/propertiesRoute.js";
import newsRoute from "./src/routes/newsRoute.js";
import detailsRoute from "./src/routes/detailsRoute.js";
import sellerRoute from "./src/routes/sellerRoute.js";

import registerRoute from "./src/routes/registerRoute.js";
import loginRoute from "./src/routes/loginRoute.js";
import sellerDataRoute from "./src/routes/sellerDataRoute.js";
dotenv.config();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/newUser", registerRoute);
app.use("/login", loginRoute);

app.use("/projects", propertiesRoute);
app.use("/news", newsRoute);
app.use("/details", detailsRoute);
app.use("/seller", sellerRoute);
app.use("/sellerData", sellerDataRoute);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

mongoose
  .connect(MONGODB_URL, {
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
