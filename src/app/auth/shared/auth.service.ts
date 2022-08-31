import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; //バックエンドへリクエストを送るためのモジュール
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'
import * as moment from 'moment'
import { Router } from '@angular/router'

const jwt = new JwtHelperService()

class DecodedToken {
        userId: string = '';
        username: string = '';
        exp: number = 0;
}
@Injectable() // クラスをサービスとして定義するにはIngectableで修飾する
export class AuthService {
        private decodedToken //HTML側から呼ばない場合はprivateにしておく、何もつけないとpublic扱いになる

        constructor(
                private http: HttpClient,
                private router: Router
                ) { 
                this.decodedToken = JSON.parse(localStorage.getItem('app-meta') as string) || new DecodedToken()
         } //HttpClientという型を持ったhttp変数を宣言

        getToken() {
                return localStorage.getItem('app-auth')
        }
        isAuthenticated() {
                return moment().isBefore(moment.unix(this.decodedToken.exp)) //引数がmoment()より前かどうかboolean
        }
        
        register(userData: any): Observable<any> {
                return this.http.post('/api/v1/users/register', userData) 
        }

        login(userData: any): Observable<any> {
                return this.http.post('/api/v1/users/login', userData).pipe(map(
                        (token) => {
                                this.decodedToken = jwt.decodeToken(JSON.stringify(token))
                                localStorage.setItem('app-auth', JSON.stringify(token).split('"')[1]) //デフォルトだと"がapp-authに含まれてしまいエラーになるため、削除
                                localStorage.setItem('app-meta', JSON.stringify(this.decodedToken))
                                return token
                        }
                ))
        }

        logout() {
                localStorage.removeItem('app-auth')
                localStorage.removeItem('app-meta')
                this.decodedToken = new DecodedToken()
                this.router.navigate(['/login'])
        }
}