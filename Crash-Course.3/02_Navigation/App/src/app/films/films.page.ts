import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
	selector: "app-films",
	templateUrl: "./films.page.html",
	styleUrls: ["./films.page.scss"]
})
export class FilmsPage implements OnInit {
	constructor(private navController: NavController, private router: Router) {
		console.log('FilmsPage:constructor')
	}

	ngOnInit() {}

	gotoDetails() {
		this.navController.navigateForward("/tabs/(films:films/2)");
	}

	gotoDetails2() {
		this.router.navigateByUrl("/tabs/(films:films/3)");
	}

	gotoPlanets() {
		/* this.router.navigate([ '/tabs/(planets:planets)']); */
		this.navController.navigateRoot("/tabs/(planets:planets)");
	}

	openDetails() {}
}
