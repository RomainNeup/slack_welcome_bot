import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { SendWelcomeMessageFunction } from "../functions/welcome_message.ts";

/**
 * The SendWelcomeMessageWorkFlow will retrieve the welcome message
 * from the datastore and send it to the specified channel, when
 * a new user joins the channel.
 */
export const SendWelcomeMessageWorkflow = DefineWorkflow({
  callback_id: "send_welcome_message",
  title: "Send Welcome Message",
  description:
    "React to a user joining a channel by putting emojis on their message.",
  input_parameters: {
    properties: {
      channel: {
        type: Schema.slack.types.channel_id,
      },
      timestamp: {
        type: Schema.slack.types.timestamp,
      },
    },
    required: ["channel", "timestamp"],
  },
});

SendWelcomeMessageWorkflow.addStep(SendWelcomeMessageFunction, {
  channel: SendWelcomeMessageWorkflow.inputs.channel,
  timestamp: SendWelcomeMessageWorkflow.inputs.timestamp,
});
