import express from "express";
import loginUser from "../controllers/loginUser.js";

const loginRoute = express.Router();

loginRoute.post("/", loginUser);

loginRoute.get("/", (req, res) => res.send("Everthing Fine!"));

export default loginRoute;
