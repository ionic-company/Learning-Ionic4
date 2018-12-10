import { Injectable } from "@angular/core";
import { HttpClient }	from "@angular/common/http";
import { FilmModel }	from "../../models/film.model"

@Injectable()
export class ApiProvider {
	constructor(public http: HttpClient) {}

	currentFilm: FilmModel;;

	getFilms() {
		return this.http.get("https://swapi.co/api/films/?format=json");
	}
}
