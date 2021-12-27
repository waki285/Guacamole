import { MessageButton } from "discord-buttons";

const okRecord: MessageButton = new MessageButton()
  .setID("ok")
  .setStyle("grey")
  .setLabel("録音");

const cancelRecord: MessageButton = new MessageButton()
  .setID("cancel")
  .setStyle("grey")
  .setLabel("キャンセル")

const stopRecord: MessageButton = new MessageButton()
  .setID("stop")
  .setStyle("blurple")
  .setLabel("録音を停止");

export { okRecord, cancelRecord, stopRecord };