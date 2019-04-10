const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PublisherSchema = new Schema({
  publisher: String
});

module.exports = mongoose.model("publisher", PublisherSchema);
