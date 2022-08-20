const express = require('express')
const router = express.Router()
Character = require('../model/character')

router.get('', function (req, res) {
        Character.find({}, function (err, foundCharacters) {
                return res.json(foundCharacters)

        })
})

router.get('/:characterId', function (req, res) {
        const characterId = req.params.characterId

        Character.findById(characterId, function (err, foundCharacter) {
                if (err) {
                        return res.status(422).send({ errors: [{ title: 'character error', detail: 'Character not found!' }] })
                }
                return res.json(foundCharacter)
        })
})

module.exports = router