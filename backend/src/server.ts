import express from "express";
import cors from "cors";
import { router } from "./routes/routes.js";

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.use(express.json());
app.use(cors());

app.use("/api/todos", router);
