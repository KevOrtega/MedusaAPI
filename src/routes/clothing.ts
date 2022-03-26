import { Schema, model } from 'mongoose'

const clothingSchema = new Schema({
    // mainPhoto: {
    //     type: FileReader,
    //     required: true
    // },
    // secondaryPhoto: {
    //     type: FileReader,
    //     required: true
    // },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false,
})

export default model('Clothing', clothingSchema)