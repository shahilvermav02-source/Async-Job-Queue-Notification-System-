import dotenv from "dotenv";
import { Queue } from "bullmq";

dotenv.config();

export const connection = {
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379,
  maxRetriesPerRequest: null,
};

export const notificationQueue = new Queue(
  "Send-emails",
  {
    connection,
  }
);
