import express from "express";
import cors from "cors";
import morgan from 'morgan';

import { router } from "./routes/routes.js";

const port = 8080;
const logger = morgan('combined');

const app = express();
app.use(logger);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.use(express.json());
app.use(cors());

app.use("/api", router);
app.get("/api", (req, res) => {
  res.send("Hello World!");
});
