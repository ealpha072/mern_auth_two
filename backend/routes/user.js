import express from 'express'
const userRouter = express.Router()
import User from '../models/user'


userRouter.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')

})

userRouter.get('/register', async (req, res, next) => {
    const {email, password, username} = newuser

    try {
        //look for user email if it exists
        const existingUser = await User.findOne({email:email, username:username})

        if (existingUser){
            res.json({message:'Email already exists try a different one'})
        }else{
            
        }
    } catch (error) {
        
    }
})

export default userRouter