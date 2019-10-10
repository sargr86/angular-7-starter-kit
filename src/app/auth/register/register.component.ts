import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import * as jwtDecode from 'jwt-decode';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    passHidden = true;

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {
        this.registerForm = this.fb.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email: ['', Validators.required],
            gender: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.getAuthUserData();
    }

    getAuthUserData(): void {
        const userData = jwtDecode(localStorage.getItem('token'));
        this.registerForm.patchValue(userData);
    }

    togglePass(): void {
        this.passHidden = !this.passHidden;
    }


    /**
     * First name field control getter
     */
    get firstName(): AbstractControl {
        return this.registerForm.get(`first_name`);
    }

    /**
     * Last name field control getter
     */
    get lastName(): AbstractControl {
        return this.registerForm.get(`last_name`);
    }

    /**
     * E-mail field getter
     */
    get email(): AbstractControl {
        return this.registerForm.get('email');
    }

    /**
     * Password field getter
     */
    get pass(): AbstractControl {
        return this.registerForm.get('password');
    }
}
