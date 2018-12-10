import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map }			from "rxjs/operators";

@Injectable()
export class ApiProvider {
	url = "https://swapi.co/api/films";

	constructor(public http: HttpClient) {
		console.log("ApiProvider::constructor");
	}

	films: any;

	getFilms() {
		console.log("ApiProvider::getFilms");

		this.films = this.http.get(this.url);
		
		return this.films;
	}
}
