import { Commande } from "./Commande.model";
import { Produit } from "./Produit.model";
import { User } from "./User.model";

export class LigneCommande {
    id?: number;
    quantite?: number;
    prix?: number;
    produitId?: number;
    userId?: number;
    commande?: Commande;
    produit?: Produit;
    user?: User;
}