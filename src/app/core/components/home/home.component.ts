import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '@core/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        public auth: AuthService
    ) {
    }

    ngOnInit() {

        // Saving social auth access token to local storage
        const token = this.route.snapshot.queryParams.token;
        if (token) {
            localStorage.setItem('token', token);
        }
    }

}
