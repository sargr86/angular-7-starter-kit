import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [PostsComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
    ]
})
export class PagesModule { }
