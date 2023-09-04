import express, { json } from "express";
// import cors from "cors";
import rentRouter from "./src/rent/rentRouter.js";

let expressApp = express();

expressApp.use(json());

// expressApp.use(cors());

const port = 8000;

expressApp.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
expressApp.use("/rent", rentRouter);
