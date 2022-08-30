import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    test : Date = new Date()
    constructor(
        private authService: AuthService,
        private router: Router
        ) { }

    ngOnInit() {}

    // use template-driven form (https://angular.io/guide/forms)
    // registerFormと名付けたフォームがボタン押下のタイミングで送信されるので、その内容を取得し表示する registerForm.value.emailなどで内容を参照できる
    username: String = ''
    email: String = '' //ngModelを使用して初期値を設定、two-way data binding
    password: String = ''
    confirmPassword: String = ''
    errors: any = []

    register(registerForm: NgForm){
        console.log(registerForm.value)
        this.authService.register(registerForm.value).subscribe(
            (result) => {
                console.log("Success!")
                this.router.navigate(['/login']) //ログインページにリダイレクト
            },
            (err: HttpErrorResponse) => {
                console.error(err)
                this.errors = err.error.errors //エラーメッセージを表示するために取得
            },
        )
    }
}
