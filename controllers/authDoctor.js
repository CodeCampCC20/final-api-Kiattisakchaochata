import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
    try {
        console.log(req.body)
        const { username, password, confirmPassword, specialization } = req.body
        const user = await prisma.user.findFirst({
            where: {
                username: username,
                
            }
        })
        console.log(user)
        if (user) { 
            createError(400, 'Username alrady exist')
        }
        const hashPassword = bcrypt.hashSync(password, 10)
        console.log(hashPassword)
        const result = await prisma.user.create({
            data: {
                username: username,
                password: hashPassword
            }
        })
        res.json({message: `Register ${result.username} Success`})
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const user = await prisma.user.findFirst({
            where: {
                username: username

            }
        })
        // console.log("user",user)
        if(!user) {
            createError(400, "Username or Password is invalid")
        }
        const checkPassword = bcrypt.compareSync(password, user.password)
        if(!checkPassword) {
            createError(400, "Username or Password is invalid")
        }
        const payload = {
            id: user.id
        }
        const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '1d'})
        res.json ({ message: `Welcom back ${user.username}`,
        payload: payload,
        token: token,
        })
    } catch (error) {
        next (error)
    }
}

