const express = require("express");
const cors = require("cors");
const tweetList = require("./apis/tweetList");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json(tweetList);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
