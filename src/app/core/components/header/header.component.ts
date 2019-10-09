import {Component, OnInit} from '@angular/core';
import {SubjectService} from '@core/services/subject.service';
import {AuthService} from '@core/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    appTheme = 'light';

    constructor(
        private subject: SubjectService,
        public auth: AuthService,
        public router: Router
    ) {
    }

    ngOnInit() {
    }

    changeTheme() {
        this.appTheme = this.appTheme === 'dark' ? 'light' : 'dark';
        this.subject.setTheme(this.appTheme);
    }

    logout() {
        this.auth.logout().subscribe(() => {
            localStorage.setItem('token', '');
            this.router.navigate(['auth/login']);
        });
    }
}
