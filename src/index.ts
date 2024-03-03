import express, { Request, Response } from "express"
import demoRouter from './routes/demo.routes'

const app = express()
const PORT = process.env.PORT || 3000

app.use("/api/v1", demoRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
