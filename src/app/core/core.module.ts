import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {throwIfAlreadyLoaded} from './guards/module-imports.guard';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
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
