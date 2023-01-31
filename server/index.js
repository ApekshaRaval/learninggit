const express = require("express");
const cors = require("cors");
const data = require("./constant/data");
const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send(data);
  console.log(data.name + "₹" + data.title);
});

app.listen(PORT, (error) => {
  console.log(error);
});
