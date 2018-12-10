import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',			loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'films',		loadChildren: './pages/films/films.module#FilmsPageModule' },
  { path: 'people',		loadChildren: './pages/people/people.module#PeoplePageModule' },
  { path: 'planets',	loadChildren: './pages/planets/planets.module#PlanetsPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
