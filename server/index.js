const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/index') //switcherを利用して環境を分ける
const SampleDb = require('./sample-db')

const productRoutes = require('./routes/products')
const path = require('path')
//Promiseオブジェクトの状態がfullfilledになったらthenメソッドの引数であるコールバック関数が実行される。
mongoose.connect(config.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
}).then(
        () => {
                if (process.env.NODE_ENV !== 'production') { //本番環境ではない時のみ初期化ができるようにしておく
                        const sampleDb = new SampleDb()
                        sampleDb.initDb() //初期化させたい時のみコメントアウト解除
                }
        }
)

const app = express()

app.use('/api/v1/products', productRoutes)

if (process.env.NODE_ENV === 'production') {
        const appPath = path.join(__dirname, '..', 'dist', 'my-first-app') //pathのベタ書き注意
        app.use(express.static(appPath))
        app.get("*", function(req, res) {
                res.sendFile(path.resolve(appPath, 'index.html'))
        })
        console.log("using production settings")
} else{
        console.log("using development settings")
}

const PORT = process.env.PORT || '3001' //Herokuに対応

app.listen(PORT, function(){
        console.log('I am running!')
})