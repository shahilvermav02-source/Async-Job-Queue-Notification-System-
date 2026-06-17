import { Worker } from "bullmq";
import { connection } from "./queue.js";
import { sendMail } from "./services/mail.services.js";

console.log("🚀 Worker file started");

const worker1 = new Worker(
  "Send-emails",
  async (job) => {
    console.log("🔥 Worker 1 processing Job:", job.id);
    await sendMail(job.data);
  },
  { connection }
);

const worker2 = new Worker(
  "Send-emails",
  async (job) => {
    console.log("⚡ Worker 2 processing Job:", job.id);
    await sendMail(job.data);
  },
  { connection }
);

const worker3 = new Worker(
  "Send-emails",
  async (job) => {
    console.log("🚀 Worker 3 processing Job:", job.id);
    await sendMail(job.data);
  },
  { connection }
);

// Worker 1 Events
worker1.on("completed", (job) => {
  console.log(`🔥 Worker 1 completed Job ${job.id}`);
});

worker1.on("failed", (job, err) => {
  console.log(`🔥 Worker 1 failed Job ${job?.id}`);
  console.log(err.message);
});

// Worker 2 Events
worker2.on("completed", (job) => {
  console.log(`⚡ Worker 2 completed Job ${job.id}`);
});

worker2.on("failed", (job, err) => {
  console.log(`⚡ Worker 2 failed Job ${job?.id}`);
  console.log(err.message);
});

// Worker 3 Events
worker3.on("completed", (job) => {
  console.log(`🚀 Worker 3 completed Job ${job.id}`);
});

worker3.on("failed", (job, err) => {
  console.log(`🚀 Worker 3 failed Job ${job?.id}`);
  console.log(err.message);
});