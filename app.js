require("dotenv").config();

const cors = require("cors");
const express = require("express");

const checkAdminMiddleware = require("./middleware/checkAdmin");
const logMiddleware = require("./middleware/log");
const { connect } = require("./config/mongodb");

const authRotuer = require("./routes/auth");
const topicRotuer = require("./routes/topic");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// connext to database
connect();

//middleware
// app.use(logMiddleware);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(res);

  res.send("123");
});

app.use("/api/auth", authRotuer);
app.use("/api/topic", topicRotuer);
