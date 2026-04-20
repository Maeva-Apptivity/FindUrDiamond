import { Injectable, computed } from '@angular/core';
import { Diamond } from '../models/diamond.models';

@Injectable({
  providedIn: 'root'
})
export class DiamondService {

  // Tableau Json qui contient la liste des diamants
  private diamondsData : Diamond[] = [
    {
      "_id": "1",
      "name": "Aquamarine",
      "image": "./img/aquamarine.png",
      "description": "Une pierre cristalline évoquant la clarté de l'eau de mer. Très prisée en haute joaillerie.",
      "mohsValue": 7,
      "priceMin": 500,
      "priceMax": 5000
    },
    {
      "_id": "2",
      "name": "Taaffeite",
      "image": "./img/taaffeite.png",
      "description": "L'une des pierres les plus rares au monde, souvent confondue avec le spinelle.",
      "mohsValue": 8,
      "priceMin": 1500,
      "priceMax": 25000
    },
    {
      "_id": "3",
      "name": "Ruby",
      "image": "./img/rubis.png",
      "description": "Une pierre précieuse d'un rouge intense, symbole de passion et de courage. Variété de corindon, elle est l'une des gemmes les plus rares.",
      "mohsValue": 9,
      "priceMin": 10000,
      "priceMax": 15000
    },
    {
      "_id": "4",
      "name": "Sapphire",
      "image": "./img/saphir.png",
      "description": "Célèbre pour son bleu profond et velouté. Le saphir appartient à la famille des corindons et représente la sagesse et la loyauté.",
      "mohsValue": 9,
      "priceMin": 4000,
      "priceMax": 6000
    },
    {
      "_id": "5",
      "name": "Diamond",
      "image": "./img/diamond.jpg",
      "description": "La pierre la plus dure connue sur Terre. Composé de carbone pur, le diamant est prisé pour son éclat inégalé et sa symbolique d'éternité.",
      "mohsValue": 10,
      "priceMin": 15000,
      "priceMax": 30000
    },
    {
      "_id": "6",
      "name": "Moissanite",
      "image": "./img/moissanite.jpg",
      "description": "Rare à l'état naturel, elle rivalise avec le diamant par sa dureté et son éclat.",
      "mohsValue": 10,
      "priceMin": 500,
      "priceMax": 2000
    }
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
