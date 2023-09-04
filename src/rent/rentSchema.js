// define content of object is called schema

import { Schema } from "mongoose";

let rentSchema = Schema({
  selectCar: {
    type: String,
    required: [true, "Name field is empty"],
  },
  pickLocation: {
    type: String,
    required: [true, "Name field is empty"],
  },
  dropLocation: {
    type: String,
    required: [true, "Name field is empty"],
  },
  pickDate: {
    type: Date,
    required: [true, "Name field is empty"],
  },
  dropDate: {
    type: Date,
    required: [true, "Name field is empty"],
  },
});
export default rentSchema;
