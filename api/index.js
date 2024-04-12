import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import useRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

dotenv.config({ path: "../.env" });

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json()); //This is going to allow json as input to server // Middleware to parse JSON request bodies

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", useRouter);
app.use("/api/auth", authRouter);
