# Changes


## Page: home

### home.html
	<ion-content padding>
		<button ion-button full (click)="updateMyValue()">Click me!</button>
		{{ myVariable }}
	</ion-content>

### home.ts

	export class HomePage {
		myVariable: string = "The force is with me!";

		constructor(public navCtrl: NavController) {}

		updateMyValue() {
			this.myVariable = "Now the force is even stronger!";
		}
	}