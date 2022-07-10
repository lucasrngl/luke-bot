const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const client = new Client({ authStrategy: new LocalAuth() });

// client.on("qr", (qr) => {
//   qrcode.generate(qr, { small: true });
// });

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (msg) => {
  console.log(`conteudo: ${msg.body}\ntipo: ${msg.type}`);
  if (msg.type === "image") {
    const msgData = msg;
    const msgMedia = msg.downloadMedia();
    console.log(msgData);
    console.log(msgMedia);
  }
});

client.initialize();
