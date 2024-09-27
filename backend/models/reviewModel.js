import mongoose from "mongoose";
const { Schema } = mongoose;

const ReviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    service: { type: Schema.Types.ObjectId, ref: "Service", required: true },
    provider: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);
