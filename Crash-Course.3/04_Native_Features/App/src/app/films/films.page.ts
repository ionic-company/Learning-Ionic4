import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { ApiProvider }				from "../../providers/api/api";
import { FilmData }					from './../../models/filmdata';

@Component({
	selector: "app-films",
	templateUrl: "./films.page.html",
	styleUrls: ["./films.page.scss"]
})
export class FilmsPage implements OnInit {
	films: Observable<FilmData>;

	filmsarray: FilmData[] = [];

	constructor(
		private navController: NavController,
		private router: Router,
		public httpClient: HttpClient,
		public apiProvider: ApiProvider
	) {
		console.log("FilmsPage::constructor");
		this.films = this.apiProvider.getFilms();

		console.log("FilmsPage::constructor: films=", this.films);

		// this.films.forEach(film => this.filmsarray.push(film))
		this.films.subscribe(film => {
			this.filmsarray.push(film);

			console.log("FilmsPage::constructor: 2 filmsarray=", this.filmsarray);
			console.log("FilmsPage::constructor: 2 filmsarray type=", typeof(this.filmsarray));
		})

		console.log("FilmsPage::constructor: 1 filmsarray=", this.filmsarray);
		console.log("FilmsPage::constructor: 1 filmsarray type=", typeof(this.filmsarray));
	}

	ngOnInit() {}

	openDetails(film) {
		console.log("FilmsPage::openDetails: film=", film);

		this.router.navigateByUrl(`/tabs/(films:film-details/${film.episode_id})`);
	}

	openPlanets() {
		this.navController.navigateRoot("/tabs/(planets:planets)");
	}
}
