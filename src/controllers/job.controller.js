import {notificationQueue} from "../queue.js"
import { ApiError } from "../utils/api_error.js";
import { ApiResponse } from "../utils/api_response.js"
import { asyncHandler } from "../utils/async_handler.js";
const welcome_emails= asyncHandler( async(req,res)=>{
     if (!req.body.to) {
       throw new ApiError(400, "Email is required");
    }
    const job = await notificationQueue.add(
        "Testing-mail",
        {
            to:req.body.to,
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
})

export {welcome_emails}
