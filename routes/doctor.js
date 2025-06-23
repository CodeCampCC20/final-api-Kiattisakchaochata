import express from "express"
import { authCheck } from "../middlewares/auth.middleward.js"
import { createUser, getMe, listUser } from "../controllers/doctor.js"





const router = express.Router()


router.get('/doctors', authCheck, listUser)
router.get('/doctors/me', authCheck, getMe)
router.post('/register/doctor', createUser)
router.get('doctors/me', authCheck,getMe)



export default router