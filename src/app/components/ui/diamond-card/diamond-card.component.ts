import { Component, input, output} from '@angular/core';
import { Diamond } from '../../../models/diamond.models';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-diamond-card',
  imports: [CurrencyPipe],
  templateUrl: './diamond-card.component.html',
  styleUrl: './diamond-card.component.scss'
})
export class DiamondCardComponent {

  diamond = input.required<Diamond>() // Création d'un input signal qui requiert le typage avec l'interface Diamond
  cardClick = output<string>(); // mise en place d'une émetteur d'événement pour envoyer l'id(sting) au composant parent

  // création d'un event handler qui déclenche l'emission de l'ID du diamant vers le parent lors du clic
  showDetails(){
    this.cardClick.emit(this.diamond()._id)
  }
}
