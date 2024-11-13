import { Router } from "express"
import { greeting } from "../controllers/jobseeker.controller.js"

const router = Router()

router.route("/greeting-message").post(greeting)

export default router