const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const blogSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  author: {
    type: String,
  },
  desc: {
    type: String,
  },
});

module.exports = mongoose.model("blogs", blogSchema);
