import {Router} from "express"
import { welcome_emails } from "../controllers/job.controller.js";
import { jobstatus } from "../controllers/jobstatus.controller.js";
const router = Router();

router.route("/mail").post(welcome_emails);
router.route("/:jobId").get(jobstatus);

export default router;