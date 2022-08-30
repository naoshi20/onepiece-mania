import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; //バックエンドへリクエストを送るためのモジュール
import { Observable } from 'rxjs';

@Injectable() // クラスをサービスとして定義するにはIngectableで修飾する
export class AuthService {

        constructor(private http: HttpClient) { } //HttpClientという型を持ったhttp変数を宣言

        // getCharacters(): Observable<any> {
        //         return this.http.get('/api/v1/characters') //相対パスで指定、CORSの問題でエラーが発生するので、Proxyを挟んで対応する（/proxy.conf.json参照）
        // }

        register(userData: any): Observable<any> {
                return this.http.post('/api/v1/users/register', userData) 
        }

        login(userData: any): Observable<any> {
                return this.http.post('/api/v1/users/login', userData)
        }
}