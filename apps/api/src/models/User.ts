import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firebaseUid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    displayName: {
      type: String,
      default: "",
    },
    photoURL: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
