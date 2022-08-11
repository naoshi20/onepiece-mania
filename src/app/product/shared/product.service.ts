import { Injectable } from "@angular/core";
import { products } from "src/app/products";
import { HttpClient } from '@angular/common/http'; //バックエンドへリクエストを送るためのモジュール
import { Observable } from 'rxjs';

@Injectable() // クラスをサービスとして定義するにはIngectableで修飾する
export class ProductService {

        constructor(private http: HttpClient) { } //HttpClientという型を持ったhttp変数を宣言

        getProducts(): Observable<any> {
                return this.http.get('/api/v1/products') //相対パスで指定、CORSの問題でエラーが発生するので、Proxyを挟んで対応する（/proxy.conf.json参照）
        }

        getProductById(productId: string): Observable<any> {
                return this.http.get('/api/v1/products/' + productId) //debugger挟んでもよい
        }
}