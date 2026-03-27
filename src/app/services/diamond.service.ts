import { Injectable } from '@angular/core';
import { Diamond } from '../models/diamond.models';

@Injectable({
  providedIn: 'root'
})
export class DiamondService {

  // Tableau Json qui contient la liste des diamants
  private diamondsData : Diamond[] = [
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

  // mise en place d'une fonction qui recupère la liste entière des diamants
  getAllDiamonds(): Diamond[]{
    return this.diamondsData;
  }

  // fonction qui va rechercher un diamant spécifique selon son ID et retourne undifined si l'id n'existe pas
  getDiamondById(id : string): Diamond | undefined {
    return (this.diamondsData.find(
      (diamond)=> diamond._id ===id)
    )
  }
}


