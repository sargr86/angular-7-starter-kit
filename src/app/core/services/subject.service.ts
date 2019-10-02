import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    public themeData = new Subject<any>();

    constructor() {
    }

    setTheme(value) {
        this.themeData.next(value);
    }

    getTheme(): Observable<any> {
        return this.themeData.asObservable();
    }
}
