const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CharacterSchema = Schema({
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
        devil_fruit_flag: Number,
        devil_fruit_name: String,
        devil_fruit_category: String,
        sovereign_haki: String,
        observation_haki: String,
        armameent_haki: String,
        belongings_1: String,
        belongings_1_role: String,
        belongings_2: String,
        belongings_2_role: String,
        belongings_3: String,
        belongings_3_role: String,
        gender: String,
        first_appearance_commic: String,
        first_appearance_story: Number,
        first_appearance_story_title: String,
        face_img: String,
        img: String,
        ship_img: String,

})

module.exports = mongoose.model('Character', CharacterSchema)