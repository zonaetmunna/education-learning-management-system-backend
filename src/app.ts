// external import
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
// internal imports

// parser or build in middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// api
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
