import { ApiResponse } from "../utils/api_response.js"

const healthcheck = (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is healthy"))
}

export { healthcheck }
