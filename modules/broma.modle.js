const mongoose = require("mongoose");

const BromaSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "Setup is required."],
      minLength: [10, "No joke can be that short."],
    },

    punchline: {
      type: String,
      required: [true, "Ponchline is Mandatory."],
      minLength: [3, "Less than 3 is not funny."],
    },
  },
  { timestamps: true }
);

const Broma = new mongoose.model("Broma", BromaSchema);
module.exports = Broma;
