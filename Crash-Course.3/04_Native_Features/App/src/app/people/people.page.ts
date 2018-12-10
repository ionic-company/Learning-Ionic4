import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-people",
	templateUrl: "./people.page.html",
	styleUrls: ["./people.page.scss"]
})
export class PeoplePage implements OnInit {
	constructor() {
		console.log("PeoplePage::contructor");
	}

	ngOnInit() {}
}
