import { Trigger } from "deno-slack-api/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import { SendWelcomeMessageWorkflow } from "../workflows/send_welcome_message.ts";

/**
 * This link trigger prompts the MessageSetupWorkflow workflow.
 */
const welcomeMessageTrigger: Trigger<
  typeof SendWelcomeMessageWorkflow.definition
> = {
  type: TriggerTypes.Event,
  name: "React to a user joining a channel by putting emojis on their message.",
  description: "Creates an automated welcome message for a given channel.",
  workflow: `#/workflows/${SendWelcomeMessageWorkflow.definition.callback_id}`,
  event: {
    event_type: "slack#/events/user_joined_channel",
    channel_ids: [TriggerContextData.Shortcut.channel_id],
  },
  inputs: {
    channel: {
      value: TriggerContextData.Shortcut.channel_id,
    },
    timestamp: {
      value: TriggerContextData.Shortcut.message_ts,
    },
  },
};

export default welcomeMessageTrigger;
