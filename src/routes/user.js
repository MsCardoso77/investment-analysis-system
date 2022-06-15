import express from "express";
import UserController from "../controllers/userController";

const routes = express.Router();
const userController = new UserController();

routes.post("/register", userController.store);
routes.post("/login", userController.login);

export default routes;
