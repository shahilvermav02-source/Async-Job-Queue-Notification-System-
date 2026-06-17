import {connection} from "./queue.js"
import {Worker} from "bullmq"
import { sendMail } from "./services/mail.services.js"
const worker = Worker(
    "Send-emails",
      async(job)=>{
           await sendMail({
                to:job.to,
                subject:job.subject,
           })
      },
    {
        connection
    }
)