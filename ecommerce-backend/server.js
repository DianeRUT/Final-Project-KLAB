import mongoose from 'mongoose'
import dotenv from 'dotenv';
import mainRouter from "./src/routes/indexRouting.js";
import bodyParser from 'body-parser';
import express from "express";


dotenv.config();

const port=process.env.PORT ||8080
const db_user=process.env.DB_USER;
const db_pass=process.env.DB_PASS;
const db_name=process.env.DB_NAME;

const app = express();

// Middleware
app.use(bodyParser.json());


// Routes
app.use("/", mainRouter);


// Database Connection
const dbUri = `mongodb+srv://rutagengwadiane33:4yYS8RRV6UZYUROB@cluster0.vqier.mongodb.net/${db_name}`;
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Node API is running on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
