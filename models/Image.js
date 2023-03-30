const monggose = require("mongoose");

const imageSchema = new monggose.Schema({
  image: {
    type: String,
    required: true,
  },
});

module.exports = monggose.model("Image", imageSchema);
