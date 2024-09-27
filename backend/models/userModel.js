import mongoose from "mongoose";
const { Schema } = mongoose;

const ServiceSchema = new Schema(
  {
    provider: { type: Schema.Types.ObjectId, ref: "User", required: true },
    serviceType: { type: String, required: true }, // e.g., Electrician, Mechanic
    description: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "provider"], required: true },
    services: [{ type: Schema.Types.ObjectId, ref: "Service" }], // Only for providers
    bookedServices: [{ type: Schema.Types.ObjectId, ref: "Booking" }], // Only for users
    location: { type: String, required: true },
    profile: { type: String }, // Additional profile info
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
