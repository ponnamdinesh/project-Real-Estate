import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true, // Indicates that the 'username' field is required
      unique: true, // Indicates that the 'username' field must be unique
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true, //password may not be unique that why we removed unique:true
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  },
  { timestamps: true } //it automatically add two fields, createdAt and updatedAt.
);

const User = mongoose.model("User", userSchema);

export default User;
