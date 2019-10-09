import {Injectable} from '@angular/core';
import {API_URL} from '@core/constants/app.config';
import {HttpClient} from '@angular/common/http';

// JWT helper
import {JwtHelperService} from '@auth0/angular-jwt';
import * as jwtDecode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData;

    constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelperService,
    ) {

        // Receiving user data from here!!!!
        if (this.loggedIn()) {
            const token = localStorage.getItem('token');
            this.userData = jwtDecode(token);
        }
    }


    fbLogin(data) {
        return this.http.post(`${API_URL}auth/facebook/token`, data);
    }

    login(data) {
        return this.http.post(`${API_URL}auth/login`, data);
    }

    /**
     * Checks to see if user logged in/ token expired
     */
    loggedIn() {
        return !this.jwtHelper.isTokenExpired();
    }

    logout() {
        return this.http.get(`${API_URL}auth/logout`);
    }

    /**
     * Checks current user roles
     * @param role passed role
     */
    checkRoles(role: string) {
        if (this.loggedIn() && this.userData) {
            if ('role' in this.userData) {
                return this.userData.role.name_en.toLowerCase() === role;
            } else {

                return this.userData.roles.map(r => {
                    return (r.name_en.toLowerCase().replace(' ', '_') === role);
                }).some(Boolean);
            }
        }
        return false;
    }
}
