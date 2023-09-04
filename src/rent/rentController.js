// import { Rent } from "../connectdb/model.js";

import { Rent } from "./model.js";

// imp Rent } from "../connectdb/model.js";ort {

export let createRent = async (req, res) => {
  let data = req.body;
  // console.log(data);
  try {
    let result = await Rent.create(data);
    res.json({
      success: true,
      message: "rent created successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllRents = async (req, res) => {
  try {
    let results = await Rent.find({});

    res.json({
      success: true,
      message: "rent data read successfully",
      data: results,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readRentById = async (req, res) => {
  let rentId = req.params.rentId;

  try {
    let results = await Rent.findById(rentId);
    res.json({
      success: true,
      message: "rent read successfully",
      data: results,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateRentById = async (req, res) => {
  let rentId = req.params.rentId;
  let data = req.body;

  try {
    let results = await Rent.findByIdAndUpdate(rentId, data, {
      new: true,
    });
    res.json({
      success: true,
      message: "Rent updated successfully",
      data: results,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteRentById = async (req, res) => {
  let rentId = req.params.rentId;

  try {
    let result = await Rent.findByIdAndDelete(rentId);
    res.json({
      success: true,
      message: "rent deleted successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
