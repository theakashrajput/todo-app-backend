import express from "express";
import cors from "cors";

import envData from "../config/env.config.js";

import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: envData.CLIENT_URL,
    credentials: true,
  })
);

app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
