import express from "express"

import { login, register } from "../controllers/auth.js"
import { loginSchema, registerSchema, validate } from "../validations/validation.js"


const router = express.Router()
router.post('/register/user', validate(registerSchema), register)
router.post('/login/user', validate(loginSchema), login)
export default router

