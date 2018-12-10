import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ApiProvider } from "../../providers/api/api";

@Component({
	selector: "app-films",
	templateUrl: "./films.page.html",
	styleUrls: ["./films.page.scss"]
})
export class FilmsPage implements OnInit {

	films: Observable<any>;

	constructor(
		private navCtrl: NavController,
		private router: Router,
		public httpClient: HttpClient,
		public apiProvider: ApiProvider
		) {
			console.log('FilmsPage::contructor');

			this.films = apiProvider.getFilms();
	}

	ngOnInit() {}

	openDetails(film) {
		console.log('FilmsPage::openDetails ', film);

		this.router.navigate( ['/tabs/(films:films/' + film.episode_id + ')' ]);
	}

	gotoDetails(film) {
		this.apiProvider.currentFilm = film;
		this.navCtrl.navigateForward('/tabs/(films:films/' + film.episode_id + ')');
	}

	gotoDetails2(film) {
		this.router.navigateByUrl("/tabs/(films:films/3)");
	}

	gotoPlanets() {
		/* this.router.navigate([ '/tabs/(planets:planets)']); */
		this.navCtrl.navigateRoot("/tabs/(planets:planets)");
	}
}
