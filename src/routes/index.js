import express from "express";
import user from "./user";
import summary from "./summary";

const routes = express.Router();

routes.use("/user", user);
routes.use("/summary", summary);

export default routes;
