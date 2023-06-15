const chris = require("mongoose");

const userSchema = chris.userSchema({
  candidate: {
    type: String,
  },
  party: {
    type: String,
  },
  position: {
    type: String,
  },
  state: {
    type: String,
  },
  candidate: {
    gender: String,
  },
});

const userModel = chris.model("election", userSchema);

module.exports = undefined;
