import {notificationQueue} from "../queue.js"
import { ApiResponse } from "../utils/api_response.js"
const welcome_emails= async(req,res)=>{
    const job = await notificationQueue.add(
        "Send-emails",
        {
            to:req.body.to,
            subject:req.body.subject,
            text:"the is the welcome by shahil verma , I am learnign the bull mq for better api response",
        }
    )
    res.status(201).json(
        new ApiResponse(201,null,"successfully add the job")
    )
}

export {welcome_emails}