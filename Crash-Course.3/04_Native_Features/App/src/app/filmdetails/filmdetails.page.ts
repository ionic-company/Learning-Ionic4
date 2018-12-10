import { Component } from "@angular/core";

import { FavoriteProvider } from "./../../providers/favorite/favorite";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-filmdetailss",
	templateUrl: "./filmdetails.page.html",
	styleUrls: ["./filmdetails.page.scss"]
})
export class FilmdetailsPage {
	film: any;
	isFavorite = false;

	filmid = null;

	firstname = null;
	lastname = null;

	constructor(
		public route: ActivatedRoute,
		public favoriteProvider: FavoriteProvider
	) {
		this.filmid = this.route.snapshot.params.id;
		console.log('FilmdetailsPage:constructor: filmid=', this.filmid)

		this.film = {
			title: "The film title",
			episode_id: this.filmid,
			opening_crawl: "The opening_crawl for filmid " + this.filmid
		};

		this.favoriteProvider.isFavorite(this.filmid).then(isFav => {
			this.isFavorite = isFav;
		});
	}

	favoriteFilm() {
		console.log("FilmDetailsPage::constructor");

		this.favoriteProvider.favoriteFilm(this.filmid).then(() => {
			this.isFavorite = true;
		});
	}

	unfavoriteFilm() {
		console.log("FilmDetailsPage::unfavoriteFilm");

		this.favoriteProvider.unfavoriteFilm(this.filmid).then(() => {
			this.isFavorite = false;
		});
	}
}
