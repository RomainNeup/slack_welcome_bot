import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

/**
 * This custom function will take the initial form input, store it
 * in the datastore and create an event trigger to listen for
 * user_joined_channel events in the specified channel.
 */
export const SendWelcomeMessageFunction = DefineFunction({
  callback_id: "welcome_message_function",
  title: "Welcome Message",
  description:
    "React to a user joining a channel by putting emojis on their message.",
  source_file: "functions/welcome_message.ts",
  input_parameters: {
    properties: {
      channel: {
        type: Schema.slack.types.channel_id,
        description: "Channel to post in",
      },
      timestamp: {
        type: Schema.slack.types.user_id,
        description: "Timestamp of the message to react to.",
      },
    },
    required: ["timestamp", "channel"],
  },
});

export default SlackFunction(
  SendWelcomeMessageFunction,
  async ({ inputs, client }) => {
    const { channel, timestamp } = inputs;
    const response = await client.reactions.add({
      channel,
      timestamp,
      name: "wave",
      token: Deno.env.get("SLACK_BOT_TOKEN")!,
    });

    if (!response.ok) {
      return { error: `Failed to save welcome message: ${response.error}` };
    }

    return { outputs: {} };
  },
);
