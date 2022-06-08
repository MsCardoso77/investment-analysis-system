import express from "express";
import routes from "./routes/index";
import cors from "cors";
const app = express();
const PORT = 3333 || process.env.PORT;

app.use(cors("*"));
app.use(express.json());
app.use(routes);
app.listen(PORT);