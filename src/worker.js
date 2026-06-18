import { Worker } from "bullmq";
import { connection } from "./queue.js";
import { sendMail } from "./services/mail.services.js";

console.log("🚀 Worker file started");

const worker1 = new Worker(
  "Send-emails",
  async (job) => {
    console.log("🔥 Worker 1 processing Job:", job.id);
     await new Promise(resolve=>
            setTimeout(resolve,1000000)
        );
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
