const path = require("path");
const express = require("express");
const galleryApi = require("./api/galleryApi.js");
const cors = require("cors");
const app = express(),
  DIST_DIR = __dirname;
app.use(express.static(DIST_DIR));
app.use(cors());
app.use(express.json());
galleryApi.api(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
