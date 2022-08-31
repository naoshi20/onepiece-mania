const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = Schema({
        username: {
                type: String,
                required: true,
                max: [60, "ユーザー名は最大60文字までです"]
        },
        email: {
                type: String,
                required: true,
                lowercase: true,
                unique: true,
                max: [60, "メールアドレスは最大60文字までです"]
        },
        password: {
                type: String,
                required: true,
                min: [8, "パスワードは6文字以上で入力してください"],
                max: [30, "パスワードは最大30文字までです"],
        },
})

UserSchema.methods.hasSamePassword = function(inputPassword){
        const user = this
        return bcrypt.compareSync(inputPassword, user.password)
}

// difence for dictionary attack
UserSchema.pre('save', function(next){
        const user = this
        const saltRounds = 10 // 解読の難易度とハッシュ化にかかる時間を決めるパラメータ

        bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(user.password, salt, function(err, hash) {
                        // store hash in the password DB
                        user.password = hash
                        next()
                })
        })
})

module.exports = mongoose.model('User', UserSchema)