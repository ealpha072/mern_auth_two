import express from 'express'
import bcrypt from 'bcrypt'
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

export default userRouter