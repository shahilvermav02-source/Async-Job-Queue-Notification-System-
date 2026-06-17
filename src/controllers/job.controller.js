import {notificationQueue} from "../queue.js"
import { ApiResponse } from "../utils/api_response.js"
const welcome_emails= async(req,res)=>{
     if (!req.body.to || !req.body.subject) {
       throw new ApiError(400, "Email and subject are required");
    }
    const job = await notificationQueue.add(
        "Testing-mail",
        {
            to:req.body.to,
            subject:req.body.subject,
            text:"the is the welcome by shahil verma , I am learnign the bull mq for better api response",
        },
        {
         attempts: 3,
         backoff: {
         type: "fixed",
         delay: 5000
            }
        }
    )
    res.status(201).json(
        new ApiResponse(201,{
            jobId:job.id
        },"successfully add the job")
    )
}

export {welcome_emails}