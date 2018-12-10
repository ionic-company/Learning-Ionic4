import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-filmdetails",
	templateUrl: "./filmdetails.page.html",
	styleUrls: ["./filmdetails.page.scss"]
})
export class FilmdetailsPage implements OnInit {
	filmid = null;

	constructor(public activatedRoute: ActivatedRoute) {
		this.filmid = this.activatedRoute.snapshot.params.id;
		
		// this.filmId = this.activatedRoute.snapshot.paramMap.get('id');

		console.log('FilmdetailsPage:constructor: id=' + this.filmid)
  }
	
	goBack() {

	}

	ngOnInit() {}
}
