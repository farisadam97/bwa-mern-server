const monggose = require("mongoose");

const bankSchema = new monggose.Schema({
  nameBank: {
    type: String,
    required: true,
  },
  nomorRekening: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = monggose.model("Bank", bankSchema);
