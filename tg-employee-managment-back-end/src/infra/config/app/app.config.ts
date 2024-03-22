import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const SERVER_PORT: string | number = process.env.SERVER_PORT || 3333;
const app = express();
app.use(cors());

app.listen(SERVER_PORT, () => {
  console.log(`Server Running on Port ${ SERVER_PORT } 🚀🚀🚀`);
});

export { app };
