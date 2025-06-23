import express from "express"
import { authCheck } from "../middlewares/auth.middleward.js"
import { createUser, getMe, listUser, readUser } from "../controllers/user.js"
import { createDoctor, listDoctor, readDoctor,getDoctor } from "../controllers/doctor.js"



const router = express.Router()


router.get('/users', authCheck, listUser)
router.get('/user', readUser)
router.post('/user', createUser)
router.get('/getme', authCheck,getMe)

router.get('/doctors', authCheck, listDoctor)
router.get('/doctor', readDoctor)
router.post('/doctor', createDoctor)
router.get('/getdoctor', authCheck, getDoctor)

export default router