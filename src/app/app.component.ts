import { Component } from '@angular/core';
import { DiamondCardComponent } from "./components/diamond-card/diamond-card.component";
import { Diamond } from './models/diamond.models';

@Component({
  selector: 'app-root',
  imports: [DiamondCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // création d'une instance de l'interface diamonds 
  diamond : Diamond = {
    "_id" : "1",
    "name" : "Rubis",
    "image": "./img/rubis.png",
    "scale" : "9",
    "price": "10 000 – 15 000",
  }


}
