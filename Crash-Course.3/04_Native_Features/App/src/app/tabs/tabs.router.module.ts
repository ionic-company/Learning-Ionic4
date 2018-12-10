import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TabsPage } from "./tabs.page";

import { PlanetsPage } from "./../planets/planets.page";
import { PeoplePage } from "./../people/people.page";
import { FilmsPage } from "./../films/films.page";
import { FilmdetailsPage } from "../filmdetails/filmdetails.page";

const routes: Routes = [
	{
		path: "tabs",
		component: TabsPage,
		children: [
			{ path: "", 				redirectTo: "/tabs/(films:films)",	pathMatch: "full" },
			{ path: "films", 			outlet: "films", 					component: FilmsPage },
			{ path: "film-details/:id",	outlet: "films", 					component: FilmdetailsPage },
			{ path: "people", 			outlet: "people", 					component: PeoplePage },
			{ path: "planets", 			outlet: "planets",					component: PlanetsPage }
		]
	},
	{
		path: "",
		redirectTo: "/tabs/(films:films)",
		pathMatch: "full"
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {}
