import { model } from "mongoose";
import rentSchema from "./rentSchema.js";

export let Rent = model("rent", rentSchema);
