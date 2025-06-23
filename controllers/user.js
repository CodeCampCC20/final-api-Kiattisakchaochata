import prisma from "../config/prisma.js";
export const listUser = async (req, res, next) => {
    try {

        console.log(req.use)
        const user = await prisma.user.findMany({
        })
        console.log(user)
        res.json({
            message: "This is List All User",
            result: user
        })
    } catch (error) {
        next(error)
    }
}
export const readUser = async (req, res, next) => {
    try {
        res.json({ message: "This is Read Use" })
    } catch (error) {
        next(error)
    }
}
export const createUser = async (req, res, next) => {
    try {
        res.json({message: "This is POST User"})
    } catch (error) {
        next(error)
    }
}
    export const getMe = async (req, res, next) => {
        try {
            const {id} = req.user;
            console.log(id)
            const user = await prisma.user.findFirst({
                where: {
                        id: Number(id)
                }
            })
            res.json({result: user})
        } catch (error) {
            next()
        }
    }
