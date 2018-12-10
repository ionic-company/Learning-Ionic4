import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
    { path: 'CrashCourse', loadChildren: './pages/crash-course/crash-course.module#CrashCoursePageModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
