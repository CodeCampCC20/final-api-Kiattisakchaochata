import express from "express"
import { authCheck } from "../middlewares/auth.middleward.js"
import { createUser, getMe, listUser, readUser } from "../controllers/user.js"




const router = express.Router()


router.get('/users', authCheck, listUser)
router.get('/user', readUser)
router.post('/register/user', createUser)
router.get('/users/me', authCheck,getMe)



export default router