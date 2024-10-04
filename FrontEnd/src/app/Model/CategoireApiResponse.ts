import { Categorie } from "./Categorie.model";

export interface CategoireApiResponse {
    _embedded: {
      categories: Categorie[];
    };
  }