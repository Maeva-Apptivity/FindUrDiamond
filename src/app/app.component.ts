import { Component } from '@angular/core';
import { Diamond } from './models/diamond.models';
import { DiamondListComponent } from './components/diamond-list/diamond-list.component';

@Component({
  selector: 'app-root',
  imports: [DiamondListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // Tableau Json qui contient la liste des diamants
  diamonds : Diamond[] = [
    
    {
      "_id" : "1",
      "name" : "Ruby",
      "image": "./img/rubis.png",
      "scale" : "9",
      "price": "10 000 – 15 000",
    },
    {
      "_id": "2",
      "name": "Sapphire",
      "image": "./img/saphir.png",
      "scale": "9",
      "price": "4 000 – 6 000",
    },
    {
      "_id": "3",
      "name": "Diamond",
      "image": "./img/diamond.jpg",
      "scale": "10",
      "price": "15 000 – 30 000",
    },
  ];
}
