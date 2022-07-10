const { readFile, writeFile } = require("fs").promises;
const path = require("path");

const baseToImage = async (filename) => {
  const baseFile = await readFile(
    path.join(__dirname, "assets", "base", filename),
    {
      encoding: "base64",
    }
  );

  const fileContents = await Buffer.from(baseFile, "base64");

  await writeFile(
    path.join(__dirname, "assets", "images", `${filename}.png`),
    fileContents,
    (err) => {
      if (err) {
        return console.log(err);
      }
    }
  );
};

module.exports = baseToImage;
