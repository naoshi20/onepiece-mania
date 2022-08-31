const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const UserCtrl = require('../controllers/user')

router.get('/secret', UserCtrl.authMiddleWare, function (req, res) {
        return res.json({"secret": true})
})

router.get('', function (req, res) {
        Character.find({}, function (err, foundCharacters) {
                return res.json(foundCharacters)

        })
})

router.get('/:characterId', function (req, res) { // ミドルウェア(UserCtrl.authMiddleWare)を挟むことで、このエンドポイントのAPIを叩くにはログインを必須にすることができる 
        const characterId = req.params.characterId

        Character.findById(characterId, function (err, foundCharacter) {
                if (err) {
                        return res.status(422).send({ errors: [{ title: 'character error', detail: 'Character not found!' }] })
                }
                return res.json(foundCharacter)
        })
})

module.exports = router