import express from "express";
import cors from "cors";
import router from "../routes/entries.routes.js";

const app = express();

app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json());


app.use("/v1/entries", router);

export default app