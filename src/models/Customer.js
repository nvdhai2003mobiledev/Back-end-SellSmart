// Khách hàng
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Customer = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Customer", Customer);
