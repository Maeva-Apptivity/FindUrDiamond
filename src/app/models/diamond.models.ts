// création et exportation de l'interface pour etre utilisé dans le composant principale
export interface Diamond {
    _id: string;
    name : string;
    image : string;
    description: string;
    mohsValue: number; 
    priceMin: number;
    priceMax: number;
}
