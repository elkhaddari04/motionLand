import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BlogComponent } from '../shared/blog/blog.component';


const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'index-1',
        component: BlogComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
