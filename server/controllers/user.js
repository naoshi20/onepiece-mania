const jwt = require('jsonwebtoken')
const config = require('../config/index')
const User = require('../model/user')

function notAuthorized(res){
        return res.status(401).send({ errors: [{ title: 'Not Authorized', detail: 'トークンがありません' }] }) //認証エラー
}

exports.authMiddleWare = function(req, res, next) {
        const token = req.headers.authorization
        if(!token) {
                return notAuthorized(res)
        }
        jwt.verify(token.split(' ')[1], config.SECRET, function (err, decodedToken) {
                if(err){
                        return res.status(401).send({ errors: [{ title: 'Not Authorized', detail: 'トークンが不正です' }] }) //認証エラー
                }
                User.findById(decodedToken.userId, function(err, foundUser) {
                        if(err) {
                                return res.status(401).send({ errors: [{ title: 'Not Authorized', detail: 'トークンが不正です' }] }) 
                        }
                        if(!foundUser) {
                                return res.status(401).send({ errors: [{ title: 'Not Authorized', detail: 'トークンが不正です' }] }) 
                        }
                        next()
                })
        })
}