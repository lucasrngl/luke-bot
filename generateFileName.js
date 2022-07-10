const path = require("path");

const generateFileName = async () => {
  return [...Array(12)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
};

module.exports = generateFileName;
