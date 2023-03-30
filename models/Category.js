const monggose = require("mongoose");

const categorySchema = new monggose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = monggose.model("Category", categorySchema);
