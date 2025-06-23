import prisma from "../config/prisma.js";
export const listDoctor = async (req, res, next) => {
    try {

        console.log(req.use)
        const doctor = await prisma.doctor.findMany({
        })
        console.log(doctor)
        res.json({
            message: "This is List All Doctor",
            result: doctor
        })
    } catch (error) {
        next(error)
    }
}
export const readDoctor = async (req, res, next) => {
    try {
        res.json({ message: "This is Read Use" })
    } catch (error) {
        next(error)
    }
}
export const createDoctor = async (req, res, next) => {
    try {
        res.json({message: "This is POST Doctor"})
    } catch (error) {
        next(error)
    }
}
    export const getDoctor = async (req, res, next) => {
        try {
            const {id} = req.user;
            console.log(id)
            const doctor = await prisma.doctor.findFirst({
                where: {
                        id: Number(id)
                }
            })
            res.json({result: doctor})
        } catch (error) {
            next()
        }
    }
