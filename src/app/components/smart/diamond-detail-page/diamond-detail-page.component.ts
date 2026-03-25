import { Component, computed, inject, input } from '@angular/core';
import { DiamondService } from '../../../services/diamond.service';

@Component({
  selector: 'app-diamond-detail-page',
  imports: [],
  templateUrl: './diamond-detail-page.component.html',
  styleUrl: './diamond-detail-page.component.scss'
})
export class DiamondDetailPageComponent {
  
  // injection des données du service en privé
  private diamondService = inject(DiamondService);

  // mise en place d'un input signal qui va recevoir la valeur de diamsID depuis L'URL
  diamsID = input.required<string>();

  // création d'un signal dérivé (computed) qui cherche le diamant dès que l'id change
  diamond = computed (()=>
    this.diamondService.getDiamondById(this.diamsID())
  );

  // mise en place d'une fonction pour retourner en arrière
  goBack(){
    window.history.back();
  }
}
