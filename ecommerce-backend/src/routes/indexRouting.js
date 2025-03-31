import express from "express";
// import contactRouter from "./ContactPath.js";
import userRouter from "./userRoutes.js";
// import productRouter from "./productRoutes.js";

const mainRouter=express.Router();

mainRouter.use("/user", userRouter)
// mainRouter.use("/product", productRouter)
export default mainRouter;