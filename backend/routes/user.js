import express from 'express'
const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')

})

export default userRouter