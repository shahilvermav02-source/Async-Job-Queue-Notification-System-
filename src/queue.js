import { Queue } from "bullmq";

export const connection = {
  host: "localhost",
  port: 6379,
};

export const notificationQueue = new Queue(
  "Send-emails",
  {
    connection,
  }
);