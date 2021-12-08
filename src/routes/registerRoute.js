import express from "express";
import registerUser from "../controllers/registerUser.js";

const registerRoute = express.Router();

registerRoute.post("/", registerUser);

registerRoute.get("/", (req, res) => res.send("Everthing Fine!"));

export default registerRoute;
