const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const petSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: false,
    },
    type: {
      type: String,
    },
    age: Number,
    chip: Boolean,
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Pet = model("Pet", petSchema);

module.exports = Pet;
