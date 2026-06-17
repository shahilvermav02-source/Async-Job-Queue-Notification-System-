import express from "express"
import mailRouter from "./routes/job.routes,js"
const app = express()

//basic configuration
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public")) // to serve static files from the "public" directory
app.get("/",(req,res)=>{  
    res.send("welcom to basecampy")})

app.use(cookieParser())
app.use("/api/v1/jobs",mailRouter);
            
