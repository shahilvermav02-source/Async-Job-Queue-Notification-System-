import {Router} from "express"
import { welcome_emails } from "../controllers/job.controller";
const router = Router();

router.route("/mail").get(welcome_emails);

export default router;