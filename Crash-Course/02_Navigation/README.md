## add to home.page.ts

    myVariable = 'Mein erstes Ionic Programm';

    updateValue() {
        this.myVariable = 'Wahnsinn, wie einfach das geht!';
    }

## add to home.page.html
    <ion-button full (click)="updateValue()">Click me!</ion-button>
    {{ myVariable }}