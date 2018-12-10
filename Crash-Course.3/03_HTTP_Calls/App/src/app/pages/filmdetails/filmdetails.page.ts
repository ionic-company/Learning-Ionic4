import { Component, OnInit }	from "@angular/core";
import { ActivatedRoute } 		from "@angular/router";

import { FilmModel }			from "../../models/film.model";
import { ApiProvider }			from "../../providers/api/api";

@Component({
	selector: "app-filmdetails",
	templateUrl: "./filmdetails.page.html",
	styleUrls: ["./filmdetails.page.scss"]
})
export class FilmdetailsPage implements OnInit {
	film: FilmModel;

	filmid = null;

	constructor(public route: ActivatedRoute, public apiProvider: ApiProvider) {
		this.filmid = this.route.snapshot.params.id;
		this.film =apiProvider.currentFilm;

		console.log('FilmdetailsPage:constructor: title=' + this.film.title)
		console.log('FilmdetailsPage:constructor: id  =' + this.filmid)
  }

	goBack() {

	}

	ngOnInit() {}
}
