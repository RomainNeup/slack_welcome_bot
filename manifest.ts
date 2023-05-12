import { Manifest } from "deno-slack-sdk/mod.ts";
import { SendWelcomeMessageWorkflow } from "./workflows/send_welcome_message.ts";

export default Manifest({
  name: "welcome-bot",
  description:
    "Quick and easy way to setup automated welcome messages for channels in your workspace.",
  icon: "assets/welcome_bot_logo.png",
  workflows: [SendWelcomeMessageWorkflow],
  outgoingDomains: [],
  datastores: [],
  botScopes: [
    "channels:read",
    "groups:read",
    "reactions:write",
  ],
});
