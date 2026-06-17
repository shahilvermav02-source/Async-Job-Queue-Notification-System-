import express from "express"
import mailRouter from "./routes/job.routes.js"
import healthcheckRoutes from "./routes/healthcheck.routes.js"
const app = express()

//basic configuration
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use("/api/v1/jobs",mailRouter);
app.use("/api/v1/healthcheck", healthcheckRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        statusCode,
        message: err.message || "Internal server error",
        errors: err.errors || [],
        success: false
    })
});

export default app
            
