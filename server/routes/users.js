const express = require('express')
const router = express.Router()
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const config = require('../config')

router.post('/login', function (req, res) {
        const { email, password } = req.body

        if (!email) {
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'メールアドレスを入力してください' }] })
        } else if (email.length > 60) {
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'メールアドレスは60文字以内で入力してください' }] })
        }

        if (!password) {
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'パスワードを入力してください' }] })
        } else if (password.length > 60) {
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'パスワードは60文字以内で入力してください' }] })
        } else if (password.length < 8) {
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'パスワードは8文字以上で入力してください' }] })
        }

        User.findOne({email}, function(err, foundUser){
                if (err) {
                        //status 500 Internal Server Error
                        return res.status(500).send({ errors: [{ title: 'User error', detail: 'サーバー側で何らかの問題が発生しました' }] })
                }
                if (!foundUser) {
                        //status 500 User Not Found Error
                        return res.status(501).send({ errors: [{ title: 'User error', detail: 'ユーザーが見つかりません' }] })
                }
                if (!foundUser.hasSamePassword(password)) {
                        return res.status(400).send({ errors: [{ title: 'User error', detail: 'パスワードかメールアドレスが間違っています' }] })
                }

                const token = jwt.sign({ // JWT のメソッドを利用しパスワードを比較
                        userId: foundUser.id,
                        username: foundUser.username,
                }, config.SECRET, { expiresIn: '1h' })

                return res.json(token)
        })
})

router.post('/register', function (req, res) {
        const { username, email, password, confirmPassword } = req.body

        if(!username) {
                //status 400 Invalid Request Error
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'ユーザー名を入力してください' }] })
        }

        if (!email) {
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'メールアドレスを入力してください' }] })
        } else if (email.length > 60) {
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'メールアドレスは60文字以内で入力してください' }] })
        }

        if (!password) {
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'パスワードを入力してください' }] })
        } else if (password.length > 60) {
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'パスワードは60文字以内で入力してください' }] })
        } else if (password.length < 8) {
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'パスワードは8文字以上で入力してください' }] })
        }
        
        if (password !== confirmPassword) {
                return res.status(400).send({ errors: [{ title: 'User error', detail: 'パスワードとパスワード（確認）が一致しません' }] })
        }

        User.findOne({email}, function(err, foundUser) {
                if (err) {
                        //status 500 Internal Server Error
                        return res.status(500).send({ errors: [{ title: 'User error', detail: 'サーバー側何らかの問題が発生しました' }] })
                }
                if(foundUser){
                        //status 500 User Already Exist Error
                        return res.status(501).send({ errors: [{ title: 'User error', detail: 'ユーザーが既に存在しています' }] })
                }

                const user = new User({username, email, password})
                user.save(function(err){
                        if(err){
                                return res.status(500).send({ errors: [{ title: 'User error', detail: 'サーバー側何らかの問題が発生しました' }] })                                
                        }
                        return res.json({"registered": true})
                })
        })
})

module.exports = router