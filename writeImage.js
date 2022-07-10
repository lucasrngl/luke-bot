const { writeFile, readFile } = require("fs").promises;
const path = require("path");

const writeImage = async (filename, media) => {
  await writeFile(
    path.join(__dirname, "assets", "base", filename),
    media.data,
    "base64",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  const baseFile = await readFile(
    path.join(__dirname, "assets", "base", filename),
    {
      encoding: "base64",
    }
  );

  const fileContents = Buffer.from(baseFile, "base64");

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

module.exports = writeImage;
