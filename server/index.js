import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import connectDb from "./config/DbConnection.js";
import postRouter from "./routes/posts.js";

const app = express();
const port=3001;
connectDb();
app.use(bodyParser.urlencoded({ extended: true,limit:"30mb" }));
app.use(bodyParser.json({ extended: true,limit:"30mb" }));
app.use(cors());
app.use("/posts",postRouter);
app.listen(port,()=>{
    console.log("listening on port",port);
});