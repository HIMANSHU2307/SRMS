import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule),
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./results/results.module').then(m => m.ResultsModule),
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
