const express = require("express");
const cors = require("cors");
const db = require("./middleware/dbconnection");
const recordmodel = require("./models/sqlmodel");
const recordrouter = require("./routes/sqlroute");

const app = express();
app.use(cors());
port = 6060;

app.get("/", async (req, res) => {
  res.send("hello all");
});

db.authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("failed");
    console.log(err.message);
  });
app.use(express.json());
app.use("/v1/record", recordrouter);

db.sync({ force: false });
app.listen(port, () => {
  console.log("sever started at http://localhost:6060");
});
