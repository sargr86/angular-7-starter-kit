import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';

import {Observable} from 'rxjs';

import {ToastrService} from 'ngx-toastr';

// import {CommonService} from '@core/services/common.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private router: Router,
                private toastr: ToastrService,
                // private common: CommonService
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap((res: HttpResponse<any>) => {

        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                const message = err.error;
                // this.common.tokenSend = true;
                // this.common.tokenChecking = false;

                if (message.hasOwnProperty('msg')) {
                    this.toastr.error('', message.msg.replace(/<(.|\n)*?>/g, ''));
                } else if (message) {
                    this.toastr.error('', message.replace(/<(.|\n)*?>/g, ''));
                }
            }
        }));
    }
}
