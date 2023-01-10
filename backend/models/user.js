import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: String,
    email:{
        type:String,
        required:[true, 'Email cannot be blank']
    },
    passwordHash: String
})

const User = mongoose.model('user', userSchema)

export default User