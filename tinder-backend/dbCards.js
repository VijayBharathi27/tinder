import mongoose from 'mongoose'
const cardSchema = new mongoose.Schema({
    name:String,
    imgUrl: String
})
const Cards = mongoose.model("Cards",cardSchema)
export default Cards;
//module.export = cardSchema;
//other

// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const productSchema = new Schema({
//     id: {
//         type: Number,
//         required: true
//     },
//     description: {
//         type: String,
//         minlength: 2,
//         required: true
//     },
//     data: {
//         type: Date,
//         default: Date.now

//     },
//     starred: {
//         type: Boolean,
//         default: false
//     }
// })

// module.export = productSchema;