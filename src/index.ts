import { Client, Message, VoiceChannel } from "discord.js";
import { Readable } from "stream";
import disbut from "discord-buttons";
import { okRecord, cancelRecord } from "./static";
import { VoiceConnection } from "discord.js";
import { createReadStream, createWriteStream } from "fs"

const client:Client = new Client();
const prefix:"r!" = "r!";

disbut(client);

class Silence extends Readable {
  _read() {
    this.push(Buffer.from([0xf8, 0xff, 0xfe]));
  };
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}.`);
  client.user?.setPresence({ activity: { name: "r!start", type: "LISTENING" }});
});

client.on("message", async (message:Message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) return message.reply("DMで実行しないでください！");
  const args: string[] = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command: string = args.shift()!.toLowerCase();
  if (command === "start") {
    const vc:VoiceChannel | null = message.member.voice.channel;
    if (!vc) return message.reply("先にボイスチャンネルに参加してください！");
    const connection: VoiceConnection = await vc.join();
    connection.play(createReadStream("../assets/recording.mp3"));
    const confirmMsg: Message = await message.channel.send({ content: `**警告:** 録音を開始すると、このVCにいる全ての人の音声が録音されます。\n本当に録音しますか?`, buttons: [okRecord, cancelRecord]});
    confirmMsg.awaitButtons((c) => c.clicker.user.id === message.author.id, { max: 1 })
  }
});

client.login(process.env.BOT_TOKEN);