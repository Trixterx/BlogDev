import mongoose from "mongoose"
import { IUser } from '../config/interface'

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
        requred: [true, "Please add your password."]
    },
    avatar: {
        type: String,
        default: 'https://i.imgur.com/XNtbIp3.png'
    },
    role: {
        type: String,
        default: 'user' // admin
    },
    type: {
        type: String,
        default: 'register' // login
    }
}, {
        timestamps: true
})

export default mongoose.model<IUser>('User', userSchema)