const mongoose = require("mongoose");
require("dotenv").config();

const mongodb_uri = process.env.MONGO_DB_URL;
async function connect() {
  try {
    await mongoose.connect(mongodb_uri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("Connect MongoDB Successfully");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}

module.exports = { connect };
