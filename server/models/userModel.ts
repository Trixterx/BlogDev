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
        type: String
    // default: 'img url'
    },
    role: {
        type: String,
        default: 'user' // admin
    },
    type: {
        type: String,
        default: 'normal'
    }
}, {
        timestamps: true
})

export default mongoose.model<IUser>('User', userSchema)