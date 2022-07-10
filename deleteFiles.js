const { unlink } = require("fs").promises;
const path = require("path");

const deleteFiles = async (filename) => {
  await unlink(path.join(__dirname, "assets", "base", filename), (err) => {
    if (err) throw err;
  });

  await unlink(
    path.join(__dirname, "assets", "images", `${filename}.png`),
    (err) => {
      if (err) throw err;
    }
  );
};

module.exports = deleteFiles;
