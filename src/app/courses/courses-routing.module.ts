import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
    {
        path: '',
        component: CoursesComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }