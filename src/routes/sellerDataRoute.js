import express from "express";
import sellerData from "../controllers/sellerData.js";

const sellerDataRoute = express.Router();

sellerDataRoute.get("/", sellerData);

export default sellerDataRoute;
