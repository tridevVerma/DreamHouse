import express from "express";
import allNews from "../controllers/allNews.js";
const newsRoute = express.Router();

newsRoute.get("/", allNews);
export default newsRoute;
