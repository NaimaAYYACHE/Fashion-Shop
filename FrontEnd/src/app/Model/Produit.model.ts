import { Categorie } from "./Categorie.model";

export class Produit{
    id? : number ;
    name? : string ;
    description? : string;
    prix? : number;
    image ? : string ;
    quantite? : number;
    remise? : number;
    categorie? : Categorie
} 