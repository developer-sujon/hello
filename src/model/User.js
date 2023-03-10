const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    userName: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      unique: true,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: true,
      default:
        "https://asset.cloudinary.com/dtcoomque/95b721b97b331edfe1d1e633a143614c",
    },
  },
  { timestamps: true, versionKey: false },
);

const User = new model("User", userSchema);
module.exports = User;
