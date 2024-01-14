const express = require("express");

const authRotuer = require("./routes/auth");

const checkAdminMiddleware = require("./middleware/checkAdmin");
const logMiddleware = require("./middleware/log");
const app = express();
const port = 3000;

// connext to database
// connect();

//middleware
app.use(logMiddleware);
app.use(express.json());

app.use("api/auth", authRotuer);

app.get("/", checkAdminMiddleware, (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
