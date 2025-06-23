import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
    try {
        console.log(req.body)
        const { email, name, password } = req.body
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            }
        })
        console.log(user)
        if (user) { 
            createError(400, 'Emaiil alrady exist')
        }
        const hashPassword = bcrypt.hashSync(password, 10)
        console.log(hashPassword)
        const result = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hashPassword
            }
        })
        res.json({message: `Register ${result.name} Success`})
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await prisma.user.findFirst({
            where: {
                email: email

            }
        })
        console.log(user)
        if(!user) {
            createError(400, "Email or Password is nivalid")
        }
        const checkPassword = bcrypt.compareSync(password, user.password)
        if(!checkPassword) {
            createError(400, "Email or Password is invalid")
        }
        const payload = {
            id: user.id
        }
        const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '1d'})
        res.json ({ message: `Welcom back ${user.name}`,
        payload: payload,
        token: token,
        })
    } catch (error) {
        next (error)
    }
}