const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const nameToHex = require("./filename");
const baseToImage = require("./baseToImage");
const writeBase64 = require("./writeBase64");

const client = new Client({ authStrategy: new LocalAuth() });

// client.on("qr", (qr) => {
//   qrcode.generate(qr, { small: true });
// });

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (msg) => {
  if (!msg.isStatus && msg.type === "image") {
    const media = await msg.downloadMedia();
    const filename = nameToHex();

    writeBase64(filename, media);

    baseToImage(filename);
  }
});

client.initialize();
