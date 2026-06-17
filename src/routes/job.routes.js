import {Router} from "express"
import { welcome_emails } from "../controllers/job.controller.js";
const router = Router();

router.route("/mail").post(welcome_emails);

export default router;