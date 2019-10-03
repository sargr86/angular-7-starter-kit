import {Component, OnInit} from '@angular/core';
import {SubjectService} from '@core/services/subject.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Angular 7 starter';
    appTheme = 'light';

    constructor(
        private subject: SubjectService,
        private translate: TranslateService
    ) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }


    ngOnInit(): void {
        this.subject.getTheme().subscribe(theme => {
            this.appTheme = theme;
        });
    }


}
