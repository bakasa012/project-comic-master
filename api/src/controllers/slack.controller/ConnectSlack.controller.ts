import { ChatPostMessageResponse, WebClient } from "@slack/web-api";
import dotenv from "dotenv";

dotenv.config();
const token = process.env.SLACK_BOT_TOKEN;
const web = new WebClient(process.env.SLACK_BOT_TOKEN);
class SlackService {
  constructor() {
    this.ConnectSlackApi();
  }
  /**
   * @description Check connect Slack api
   */
  private async ConnectSlackApi() {
    try {
      const result = await web.auth.test({ token });
      console.log("Connect slack api is", result.ok);
    } catch (error) {
      console.log("Error connect slack api", token);
    }
  }
  /**
   * @description Send a message and return id thread message
   * @param idChannel id of the channel is send message
   * @param text content is send to channel
   * @returns idThread is string
   */
  async SendMessageSlackApi(idChannel: string, text: string): Promise<string> {
    try {
      const sendMessage = await web.chat.postMessage({
        channel: idChannel,
        text,
      });
      return sendMessage.ts;
    } catch (error) {
      console.log("Error is send message to ", idChannel);
    }
  }
  /**
   * @description Send a message into thread message
   * @param idChannel id of the channel is send message
   * @param text content is send to channel
   * @param ts id of thread message in this chanel
   * @returns response message is send
   */
  async SendMessageToThreadSlackApi(
    idChannel: string,
    text: string,
    ts: string
  ): Promise<ChatPostMessageResponse> {
    try {
      const sendMessage = await web.chat.postMessage({
        channel: idChannel,
        text,
        thread_ts: ts,
      });
      return sendMessage;
    } catch (error) {
      console.log("Error is send message to ", idChannel);
    }
  }
  /**
   * @description Slack test connection
   */
  async SlackTestConnect() {
    console.log({ token });

    const conversationId = "C048H7JDS95";
    web.chat.update({
      channel: "",
      ts: "",
      text: "",
    });
    const result = await web.chat.postMessage({
      text: "Hello world!",
      channel: conversationId,
      thread_ts: "1667379057.958419",
    });
    console.log(
      `Successfully send message ${result.ts} in conversation ${conversationId}`
    );
  }
}

export default new SlackService();
// C048H7JDS95
