import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@core/services/auth.service';
import {API_URL} from '@core/constants/app.config';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    apiUrl = API_URL;

    constructor(
        private fb: FormBuilder,
        private auth: AuthService
    ) {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    fbAuth() {
        this.auth.fbLogin(this.loginForm.value).subscribe(dt => {

        });
    }

    login() {
        this.auth.login().subscribe(dt => {

        });
    }
}
