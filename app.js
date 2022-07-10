const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const path = require("path");
const generateFileName = require("./generateFileName");
const writeImage = require("./writeImage");
const deleteFiles = require("./deleteFiles");

const client = new Client({ authStrategy: new LocalAuth() });

// client.on("qr", (qr) => {
//   qrcode.generate(qr, { small: true });
// });

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (msg) => {
  if (!msg.isStatus && msg.type === "image" && msg.body === "!sticker") {
    const media = await msg.downloadMedia();
    const filename = await generateFileName();

    await writeImage(filename, media);

    const sticker = MessageMedia.fromFilePath(
      path.join(__dirname, "assets", "images", `${filename}.png`)
    );

    client.sendMessage(msg.from, sticker, { sendMediaAsSticker: true });

    await deleteFiles(filename);
  }
});

client.initialize();
