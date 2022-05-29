import express from "express";
import sellerProperties from "../controllers/sellerProperties.js";
import removeProperty from "../controllers/removeProperty.js";
import addProperty from "../controllers/addProperty.js";

const sellerRoute = express.Router();

sellerRoute.get("/", sellerProperties);
sellerRoute.delete("/", removeProperty);
sellerRoute.post("/", addProperty);

export default sellerRoute;
