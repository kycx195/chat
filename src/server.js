import express from 'express'
import connectDb from './config/connectDb'
import initRoutes from './routes/api'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

connectDb()
initRoutes(app)

app.use((err, req, res, next) => {
  console.log('eerr', err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.listen(process.env.PORT, process.env.HOSTNAME, () =>
  console.log(`Server running at http://${process.env.HOSTNAME}:${process.env.PORT}/`)
)
