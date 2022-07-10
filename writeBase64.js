const { writeFile } = require("fs").promises;
const path = require("path");

const writeBase64 = async (filename, media) => {
  writeFile(
    path.join(__dirname, "assets", "base", filename),
    media.data,
    "base64",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

module.exports = writeBase64;
