import { MessageButton } from "discord-buttons";

const okRecord: MessageButton = new MessageButton()
  .setID("ok")
  .setStyle("grey")
  .setLabel("録音");

const cancelRecord: MessageButton = new MessageButton()
  .setID("cancel")
  .setStyle("grey")
  .setLabel("キャンセル")

export { okRecord, cancelRecord };