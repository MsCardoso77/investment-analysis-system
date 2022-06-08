import express from "express";
import UserController from "../controllers/userController";

const routes = express.Router();
const userController = new UserController();

routes.get("/", userController.index);

export default routes;
