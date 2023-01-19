import express from 'express'
import bcrypt from 'bcrypt'
import logger from '../utils/logger.js'
const userRouter = express.Router()
import User from '../models/user.js'

userRouter.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')

})

userRouter.post('/register', async (req, res, next) => {
    console.log(req.body)
    const {email, password, username} = req.body

    try {
        //look for user email if it exists
        const existingUser = await User.findOne({email:email, username:username})

        if (existingUser){
            res.json({error:'Email already exists try a different one'})
        }else{
            const saltRound = 10
            const passwordHash = await bcrypt.hash(password, saltRound)
            const user = new User({username, email, passwordHash})
            const savedUser = await user.save()
            res.json({message:'Registration successfull', user:savedUser})
        }
    } catch (error) {
        res.json({error: 'Error registering user'})
        next(error)
    }
})

userRouter.post('/login', async(req, res, next) => {
    const {email, password} = req.body
    try {
        const findUser = await User.findOne({email})
        let checkUser = findUser === null ? 
            false : 
            await bcrypt.compare(password, findUser.passwordHash)

        if(!(checkUser && findUser)){
            res.status(404).send({error: 'Invalid username or password please try again'})
        } else {
            res.json({message: 'Login successfull', user:findUser})
        }
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
})

export default userRouter