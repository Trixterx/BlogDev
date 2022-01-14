import mongoose, { ConnectOptions } from 'mongoose'

const URI = process.env.MONGODB_URL

mongoose.connect(`${URI}`, {

    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions, (err) => {
    if(err) throw err;
    console.log('Mongodb connection')
})