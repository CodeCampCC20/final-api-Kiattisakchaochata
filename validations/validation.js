import { object, ref, Schema, string} from 'yup'

export const registerSchema = object({
    email: string().email("email ไม่ถูกต้อง").required("กรุณากรอก Email"),
    password: string().min(6, "Password ต้องมากกว่า 6 อักขระ"),
    confirmPassword: string().oneOf([ref("password"), null], "Confirm password ไม่ตรงกัน")
});
export const loginSchema = object({
    email: string().email("Email ไม่ถูกต้อง").required("กรุณากรอก Email"),
    password: string().min(6, "Password ต้องมากกว่า 6 อักขระ"), 
})
export const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate(req.body, {abortEarly: false})
        next()
    } catch (error) {
        const errMsg = error.errors.map((item) => item)
        const errTxt = errMsg.join(",")
        console.log(errTxt)
        const mergeErr = new Error(errTxt)
        next(mergeErr)
    }
}