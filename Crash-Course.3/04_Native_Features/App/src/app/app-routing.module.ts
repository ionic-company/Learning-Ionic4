import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{ path: "",						loadChildren: "./tabs/tabs.module#TabsPageModule"						},
	{ path: "films",				loadChildren: "./films/films.module#FilmsPageModule"					},
	{ path: "film-details/:film",	loadChildren: "./filmdetails/filmdetails.module#FilmdetailsPageModule"	},
	{ path: "people",				loadChildren: "./people/people.module#PeoplePageModule" 				},
	{ path: "planets",				loadChildren: "./planets/planets.module#PlanetsPageModule"				}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
