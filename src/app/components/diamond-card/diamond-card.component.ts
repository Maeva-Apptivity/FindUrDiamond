import { Component, input} from '@angular/core';
import { Diamond } from '../../models/diamond.models';
@Component({
  selector: 'app-diamond-card',
  imports: [],
  templateUrl: './diamond-card.component.html',
  styleUrl: './diamond-card.component.scss'
})
export class DiamondCardComponent {

  diamond = input.required<Diamond>() // Création d'un input signal qui requiert le typage avec l'interface Diamond

}
