const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
    },

    description: {
        type: String,
        required : true,
    },

    author: {
        type: String,
        required : true,
    },

    price: {
        type: Number,
        required : true,
    },

    pdf:{
        type: String,
        default: 1
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Book", bookSchema)