import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoute from './routes/user.js'
import authRouter from './routes/auth.js'
import doctorRoute from './routes/doctor.js'
import authDoctor from './routes/authDoctor.js'




const app = express()


// app.use(cors())
// app.use(morgan('dev'))
app.use(express.json())


app.use('/auth', userRoute)
app.use('/auth', authRouter)
app.use ('/auth', doctorRoute)
app.use ('/auth', authDoctor)

// app.use('/api', docRoute)
// app.use('/auth', authDoc)
// app.use(error)
// app.use(pagenotfound)

const PORT = 8855

app.listen(8855, () => console.log(`server is running on port ${PORT}`))