import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    test : Date = new Date()
    constructor(
        private authService: AuthService,
        private router: Router) { }

    ngOnInit() {}

    username: String = ''
    email: String = '' //ngModelを使用して初期値を設定、two-way data binding
    password: String = ''
    confirmPassword: String = ''
    errors: any = []

    login(loginForm: NgForm) {
        console.log(loginForm.value)
        this.authService.login(loginForm.value).subscribe(
            (result) => {
                console.log("Success!")
                this.router.navigate(['/characters'])
            },
            (err: HttpErrorResponse) => {
                console.error(err)
                this.errors = err.error.errors //エラーメッセージを表示するために取得
            },
        )
    }
}
