import express from 'express'
//import morgan from 'morgan'
import config from './utils/config.js'
import mongoose from 'mongoose'
import logger from './utils/logger.js'
import middleware from './utils/middleware.js'
import cors from 'cors'

//routes
import userRouter from './routes/user.js'

logger.info('Connecting to ', config.URL)

const app = express()

mongoose.set("strictQuery", false);
mongoose.connect(config.URL)
.then(()=> {
    logger.info(`Connecting to database, ready to query`)
    app.listen(config.PORT, ()=> {logger.info(`Server running on port ${config.PORT}`)})
})
.catch(error => {
    logger.error(error.message)
})

app.use(cors())
app.use(middleware.requestLogger)
app.use(middleware.faviconIgnore)
app.use('/users', userRouter)

app.use(middleware.unKnownEndpoints)