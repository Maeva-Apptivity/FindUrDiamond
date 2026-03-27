import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { DiamondCardComponent } from '../diamond-card/diamond-card.component';
import { Diamond } from '../../../models/diamond.models';

@Component({
  selector: 'app-diamond-list',
  imports: [DiamondCardComponent],
  templateUrl: './diamond-list.component.html',
  styleUrl: './diamond-list.component.scss'
})
export class DiamondListComponent {
  private router = inject(Router)
  diamonds = input.required<Diamond[]>(); // signal input qui requirert la reception du le tableau de diamants en JSON 

  // handler de l'évenement cardClick qui gere la reception de l'id du diamant sélectionné
  receiptShowDetails(diamondId : string){
    this.router.navigate(['diamonds/show',diamondId])
  }
}
