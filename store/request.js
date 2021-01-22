// @flow
const { create } = require("apisauce");
const baseURL = "http://localhost:9000";

// create main request configs
const request = (() => {
  const headers = {
    platform: "web",
    "Content-Type": "application/json"
  };

  return create({
    baseURL,
    headers
  });
})();

module.exports = {
  request,
  baseURL
};
