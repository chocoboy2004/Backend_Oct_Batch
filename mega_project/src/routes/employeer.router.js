import { Router } from "express"
import { signup, login, logout, currentEmployee } from "../controllers/employeer.controller.js"
import empAuth from "../middlewares/empAuth.middleware.js"

const router = Router()

router.route("/signup").post(signup)
router.route("/login").post(login)

router.route("/logout").get(empAuth, logout)

router.route("/current-employee").get(empAuth, currentEmployee)

export default router