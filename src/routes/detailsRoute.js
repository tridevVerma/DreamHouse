import express from "express";
import propertyDetails from "../controllers/propertyDetails.js";

const detailsRoute = express.Router();

detailsRoute.get("/", propertyDetails);

export default detailsRoute;
