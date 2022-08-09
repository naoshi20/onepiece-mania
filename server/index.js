const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')

mongoose.connect(config.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
});

const app = express()

app.get('/products', function(req, res){
        res.json({'success': true})
})

const PORT = process.env.PORT || '3001' //Herokuに対応

app.listen(PORT, function(){
        console.log('I am running!')
})

