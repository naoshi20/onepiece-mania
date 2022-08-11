const Product = require('./model/product')

class SampleDb {
        constructor(){
                this.products = [
                        {
                                coverImage: "./assets/img/phone-cover.jpg",
                                name: 'Phone XL',
                                price: 799,
                                description: 'A large phone with one of the best screens',
                                heading1: 'Light',
                                heading2: 'Beatiful',
                                heading3: 'Fast',
                                headingtext1: 'text text text text text text text text text text text text text text text text ',
                                headingtext2: 'text text text text text text text text text text text text text text text text ',
                                headingtext3: 'text text text text text text text text text text text text text text text text ',
                        },
                        {
                                coverImage: "./assets/img/phone-cover.jpg",
                                name: 'Phone XL',
                                price: 799,
                                description: 'A large phone with one of the best screens',
                                heading1: 'Light',
                                heading2: 'Beatiful',
                                heading3: 'Fast',
                                headingtext1: 'text text text text text text text text text text text text text text text text ',
                                headingtext2: 'text text text text text text text text text text text text text text text text ',
                                headingtext3: 'text text text text text text text text text text text text text text text text ',
                        },
                        {
                                coverImage: "./assets/img/phone-cover.jpg",
                                name: 'Phone XL',
                                price: 799,
                                description: 'A large phone with one of the best screens',
                                heading1: 'Light',
                                heading2: 'Beatiful',
                                heading3: 'Fast',
                                headingtext1: 'text text text text text text text text text text text text text text text text ',
                                headingtext2: 'text text text text text text text text text text text text text text text text ',
                                headingtext3: 'text text text text text text text text text text text text text text text text ',
                        }
                ]
        }
        //非同期関数（処理内部でawaitを使用し非同期関数の実行が完了するまで一部の処理を停止する関数）
        async initDb() {
                await this.cleanDb() //非同期関数でありPromiseを返す
                this.pushProductsToDb() //Promiseの状態がfullfilledになったタイミングでこの関数が実行される、それまでは実行されない
        }
        //Promiseを返す非同期関数
        async cleanDb() {
                await Product.deleteMany({})//deleteManyも非同期関数、Promiseを返す。そのままPromiseを返す関数なので非同期関数になる。
        }

        pushProductsToDb(){
                this.products.forEach(
                        (product) => {
                                const newProduct = new Product(product)
                                newProduct.save()
                        }
                )
        }
        
        seeDb(){
                this.pushProductsToDb()
        }
}

module.exports = SampleDb