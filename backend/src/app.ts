import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import bodyParser from "body-parser";

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const request = req.body;
  console.log(request);
  fetch(request.url).then(async (response) => {
    // console.log(await response.json());
    res.send(await response.json());
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
