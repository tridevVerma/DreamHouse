import express from "express";
import allProperties from "../controllers/allProperties.js";
import filterByProperties from "../controllers/filterByProperties.js";
const propertiesRoute = express.Router();

propertiesRoute.get("/", allProperties);
propertiesRoute.get("/filters", filterByProperties);
export default propertiesRoute;
