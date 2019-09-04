import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {throwIfAlreadyLoaded} from './guards/module-imports.guard';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [
        CommonModule,
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
