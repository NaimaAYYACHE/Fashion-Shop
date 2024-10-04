import { LigneCommande } from "./LigneCommande.model";
import { User } from "./User.model";

export class Commande{
  id?: number;
  dateC?: Date;
  totalC?: number;
  status?: string;
  userId?: number;
  ligneCommandes?: LigneCommande[];
  user?: User;

}