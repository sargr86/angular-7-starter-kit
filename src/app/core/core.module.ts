import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {throwIfAlreadyLoaded} from './guards/module-imports.guard';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MaterialModule} from './modules/material.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule
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
