import {Injectable} from '@angular/core';
import {API_URL} from '@core/constants/app.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
    ) {


    }


    fbLogin(data) {
        // data.access_token = 'EAANKNkMXRHgBAIKQRgd6uxUYumy9Tsr4Q50gTC9dZAGsOfkIklWPHPFBs4qJFB4pHLx4zqhBtfHWnMMGd6ft1aViHpCmo4IjH2ENvfkk3fwSisJ3pNlmZClVaS2TzPTSCxvrUGXEVtHmk4HtCIfBpZArI51BZBORnWDNmZAh8b9m9DKUDWbEmLrkZBMhZAf02yhQSYPgusP98LaPCv1J9qS';
        return this.http.post(`${API_URL}auth/facebook/token`, data);
    }

    login() {
        return this.http.get(`${API_URL}auth/login`);
    }
}
