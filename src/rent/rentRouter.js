import { Router } from "express";

// import validation from "../middleware/validation.js";
// import Joi from "joi";
// import {
//   createRent,
//   deleteRentById,
//   readAllRents,
//   readRentById,
//   updateRentById,
// } from "../controller/rentController.js";
// import rentValidation from "../validation/rentValidation.js";
import {
  createRent,
  deleteRentById,
  readAllRents,
  readRentById,
  updateRentById,
} from "./rentController.js";

const rentRouter = Router();

//Rent.create(data)
//Rent.find({})
//Rent.findById(id)
//Rent.findByIdAndDelete(id)
//Rent.findByIdAndUpdate(id, data)

//

rentRouter
  .route("/") //localhost:8000/rents
  .post(createRent)

  .get(readAllRents);

rentRouter
  .route("/:rentId")
  .get(readRentById)
  .patch(updateRentById)
  .delete(deleteRentById);

export default rentRouter;
