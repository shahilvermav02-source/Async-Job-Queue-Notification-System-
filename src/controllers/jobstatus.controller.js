import { notificationQueue } from "../queue";
import { asyncHandler } from "../utils/async_handler";
import { ApiError } from "../utils/api_error"; 
import { ApiResponse } from "../utils/api_response";
const jobstatus = asyncHandler(async(req,res)=>{
     const { jobId } =req.params;
     const job = await notificationQueue.getJob(jobId);
     if(!job)
     {
        throw new ApiError(404,"Job not found")
     }
     
    const state = await job.getState();

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {
                jobId: job.id,
                state
            },
            "Job status fetched successfully"
        )
    );
    }
)

export{ jobstatus }