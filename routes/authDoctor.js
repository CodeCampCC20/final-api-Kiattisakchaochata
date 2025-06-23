import express from "express"


import { loginSchema, registerSchema, validate } from "../validations/validation.js"
import { login, register } from "../controllers/authdoctor.js"


const router = express.Router()
router.post('/register/doctor', validate(registerSchema), register)
router.post('/login/doctor', validate(loginSchema), login)
export default router

