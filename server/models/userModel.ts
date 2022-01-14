import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add your name."],
        trim: true,
        maxlength: [20, "Name is max 20 chars long."]
    },
    account: {
        type: String,
        requred: [true, "Please add your email or phone."],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        requred: [true, "Please add your password."],
        trim: true
    },
    avatar: {
        type: String
    // default: 'img url'
    },
    role: {
        type: String,
        defaul: 'user' // admin
    },
    type: {
        type: String,
        defaul: 'normal'
    }
}, {
        timestamps: true
})

export default mongoose.model('User', userSchema)