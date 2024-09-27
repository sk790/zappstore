import mongoose from "mongoose";
const { Schema } = mongoose;

const ServiceSchema = new Schema(
  {
    provider: { type: Schema.Types.ObjectId, ref: "User", required: true },
    serviceType: {
      type: String,
      enum: ["Electrician", "Mechanic", "Plumber"],
      required: true,
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

export default mongoose.model("Service", ServiceSchema);
