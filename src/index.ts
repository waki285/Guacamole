import { Client, Message } from "discord.js";
import { Readable } from "stream";

const client:Client = new Client();
const prefix:"r!" = "r!";

class Silence extends Readable {
  _read() {
    this.push(Buffer.from([0xf8, 0xff, 0xfe]));
  };
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}.`);
  client.user?.setPresence({ activity: { name: "r!start", type: "LISTENING" }});
});

client.on("message", (message:Message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args: string[] = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command: string = args.shift()!.toLowerCase();
  if (command === "start") {
  }
})
