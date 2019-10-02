import {Component, OnInit} from '@angular/core';
import {SubjectService} from '@core/services/subject.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    appTheme = 'light';

    constructor(
        private subject: SubjectService
    ) {
    }

    ngOnInit() {
    }

    changeTheme() {
        this.appTheme = this.appTheme === 'dark' ? 'light' : 'dark';
        this.subject.setTheme(this.appTheme);
    }
}
