import { Component, inject } from '@angular/core';
import { DiamondService } from '../../../services/diamond.service';
import { DiamondListComponent } from '../../ui/diamond-list/diamond-list.component';

@Component({
  selector: 'app-diamond-list-page',
  imports: [DiamondListComponent],
  templateUrl: './diamond-list-page.component.html',
  styleUrl: './diamond-list-page.component.scss'
})
export class DiamondListPageComponent {

  // injection des données du service en privé
  private diamondService = inject(DiamondService);

  // récupération de la liste des diamants fournit par le service
  diamsFromService = this.diamondService.getAllDiamonds();
  

}
