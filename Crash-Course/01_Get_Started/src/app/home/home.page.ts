import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myVariable = 'Mein erstes Ionic Programm';

  constructor(public navCtrl: NavController) {
    //
  }

  updateValue() {
    this.myVariable = 'Wahnsinn, wie einfach das geht!';
  }
}
