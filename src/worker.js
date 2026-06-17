import { Worker } from "bullmq";
import { connection } from "./queue.js";
import { sendMail } from "./services/mail.services.js";

const worker = new Worker(
  "Send-emails",
  async (job) => {
    await sendMail(job.data);
  },
  {
    connection,
  }
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.log(`Job ${job?.id} failed`);
  console.log(err.message);
});