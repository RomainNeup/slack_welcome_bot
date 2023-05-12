# Welcome Bot

This is a simple bot that welcomes members when they join a Slack channel. It's based on the [Slack Events API](https://api.slack.com/events-api) and [Bolt for Python](https://slack.dev/bolt-python/).

## Setup

### 1. Run this app locally

Run these commands to get started:

```zsh
# Run the app
slack run
```

## How it works

This app uses the Slack Events API to subscribe to `member_joined_channel` events. When a user joins a channel, the app react to the event message with a :wave: emoji.

## Scope

This app uses the following [OAuth scopes](https://api.slack.com/scopes):
- [`channels:read`](https://api.slack.com/scopes/channels:read)
- [`groups:read`](https://api.slack.com/scopes/groups:read)
- [`reactions:write`](https://api.slack.com/scopes/reactions:write)