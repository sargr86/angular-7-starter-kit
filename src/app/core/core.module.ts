import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {throwIfAlreadyLoaded} from './guards/module-imports.guard';
import {SharedModule} from '@shared/shared.module';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from '@core/components/home/home.component';

import {JwtHelperService} from '@auth0/angular-jwt';
import {JwtModule} from '@auth0/angular-jwt';
import {ToastrModule} from 'ngx-toastr';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/languages/', '.json');
}

// Token getter for JWT module
export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        JwtModule.forRoot({
            config: {
                tokenGetter,
                whitelistedDomains: ['localhost:3000', '68.183.36.96:80', 'secretsouth.ie', '68.183.36.96'],
                blacklistedRoutes: ['localhost:3000/auth/', '68.183.36.96:80/auth/', 'secretsouth.ie/auth/', '68.183.36.96/auth/']
            }
        }),
        ToastrModule.forRoot({
            preventDuplicates: true
        })
    ],
    providers: [
        JwtHelperService
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
