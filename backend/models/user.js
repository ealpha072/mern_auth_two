import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        lowercase:true,
        required: [true, 'Username cannot be blank']
    },
    email:{
        type:String,
        required:[true, 'Email cannot be blank']
    },
    passwordHash: String
})

const User = mongoose.model('user', userSchema)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
})



export default User