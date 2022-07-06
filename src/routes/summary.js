import express from "express";
import SummaryController from "../controllers/summaryController";

const routes = express.Router();
const summaryController = new SummaryController();

routes.post("/", summaryController.store);
routes.get("/", summaryController.index);

export default routes;
