const axios = require("axios");

const baseUrl = "https://api.imgur.com/3/";
exports.instance = axios.create({
  baseURL: baseUrl,
  // 5 minutes
  timeout: 300000,
  headers: {
    "content-type": "application/json",
    Authorization: "Client-ID 8910ce123c3eb2e",
  },
});
