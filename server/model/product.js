const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ProductSchema = Schema({
        coverImage: String,
        name: String,
        price: Number, 
        descriptopn: String,//description: { type: String, max: [60, '最大60文字までです']},
        heading1: String,
        heading2: String,
        heading3: String,
        headingtext1: String,
        headingtext2: String,
        headingtext3: String,
})

module.exports = mongoose.model('Product', ProductSchema)