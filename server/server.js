import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
import cors from "cors";
import routes from "./routes/userRoutes.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const connection = process.env.CONNECTION_URL;

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());

app.use("/", routes);

mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    app.listen(PORT, () => {
      console.log(`server running in http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(err));
