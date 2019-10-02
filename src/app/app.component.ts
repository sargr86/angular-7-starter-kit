import {Component, OnInit} from '@angular/core';
import {SubjectService} from '@core/services/subject.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Angular 7 starter';
    appTheme = 'light';

    constructor(private subject: SubjectService) {

    }


    ngOnInit(): void {
        this.subject.getTheme().subscribe(theme => {
            this.appTheme = theme;
        });
    }


}
