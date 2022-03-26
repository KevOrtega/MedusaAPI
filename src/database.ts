import mongoose from 'mongoose'
import config from './config'

(async () => {
    try {
        // const mongoose_option: ConnectOptions = {
        //     user: config.MONGO_USER,
        //     pass: config.MONGO_PASSWORD,
        // }
    
        await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`)
        console.log('database is connected')
    } catch (error) {
        console.log(error)
    }
})()