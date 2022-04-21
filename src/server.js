import express from 'express'
import connectDb from './config/connectDb'
import initRoutes from './routes/api'

const app = express()
connectDb()
initRoutes(app)

app.listen(process.env.PORT, process.env.HOSTNAME, () =>
  console.log(`Server running at http://${process.env.HOSTNAME}:${process.env.PORT}/`)
)
