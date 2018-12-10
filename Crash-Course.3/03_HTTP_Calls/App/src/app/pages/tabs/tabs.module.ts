import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TabsPageRoutingModule } from "./tabs.router.module";

import { TabsPage } from "./tabs.page";

import { FilmsPageModule } from "./../films/films.module";
import { FilmdetailsPageModule } from "./../filmdetails/filmdetails.module";
import { PeoplePageModule } from "./../people/people.module";
import { PlanetsPageModule } from "./../planets/planets.module";

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		TabsPageRoutingModule,
		FilmsPageModule,
		FilmdetailsPageModule,
		PeoplePageModule,
		PlanetsPageModule
	],
	declarations: [TabsPage]
})
export class TabsPageModule {}
