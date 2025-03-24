require("dotenv").config();
const { WebClient } = require("@slack/web-api");

const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);
const channelId = process.env.SLACK_CHANNEL_ID;

// ✅ Function to Send Messages to Slack
const sendSlackMessage = async (message) => {
  try {
    await slackClient.chat.postMessage({
      channel: channelId,
      text: message,
    });
    console.log("✅ Message sent to Slack:", message);
  } catch (error) {
    console.error("❌ Error sending message to Slack:", error);
  }
};

// ✅ Function to Fetch Messages from Slack
const fetchSlackMessages = async () => {
  try {
    const result = await slackClient.conversations.history({
      channel: channelId,
      limit: 10, // Get the last 10 messages
    });
    return result.messages;
  } catch (error) {
    console.error("❌ Error fetching messages from Slack:", error);
    return [];
  }
};

module.exports = { sendSlackMessage, fetchSlackMessages };
