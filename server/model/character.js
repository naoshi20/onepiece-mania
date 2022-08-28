const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CharacterSchema = Schema({
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
        id: Number,
        char_name: String,
        ship_name: String,
        birthday: String,
        age: Number,
        height: Number,
        blood_type: String,
        place_of_birth: String,
        favorite_food: String,
        bounty: Number,
        cv: String,
        popular_name: String,
        devil_fruit: String,
        sovereign_haki: String,
        observation_haki: String,
        armameent_haki: String,
        belongings: String,
        gender: String,
        first_appearance_commic: String,
        first_appearance_story: Number,
        first_appearance_story_title: String,
        face_img: String,
        img: String,
        ship_img: String,

})

module.exports = mongoose.model('Character', CharacterSchema)