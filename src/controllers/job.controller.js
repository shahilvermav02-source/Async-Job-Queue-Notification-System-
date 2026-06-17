import {notificationQueue} from "../queue.js"

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
        //left part 
    )
}

export {welcome_emails}