import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LigneCommande } from 'src/app/Model/LigneCommande.model';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  appUrl = 'http://localhost:9999/commande-service/';
  countUpdated = new EventEmitter<number>();
  count: number = 0; // Initialisez la propriété count à 0

  constructor(private http: HttpClient) {}

  addCart(LigneCommande: LigneCommande): Observable<LigneCommande> {
    return this.http.post<LigneCommande>(`${this.appUrl}addCart`, LigneCommande).pipe(
      tap(() => {
        this.getCount(1); // Mettez à jour le count après l'ajout
      })
    );
  }

  getCartByUser(id: number): Observable<LigneCommande[]> {
    return this.http.get<LigneCommande[]>(`${this.appUrl}CartByUser/${id}`);
  }

  updateCart(id: number, quantite: number): Observable<LigneCommande> {
    const url = `${this.appUrl}/updateCart/${id}/${quantite}`;
    return this.http.get<LigneCommande>(url);
  }

  deletecart(id: number): Observable<void> {
    return this.http.delete<void>(`${this.appUrl}deleteCart/${id}`).pipe(
      tap(() => {
        this.getCount(1); // Mettez à jour le count après l'ajout
      })
    );
  }
  

  getCount(id: number): Observable<number> {
    return this.http.get<number>(`${this.appUrl}count/${id}`);
  }
  

  triggerCountUpdate(count: number) {
    this.count = count;
    this.countUpdated.emit(count);
  }

  getImageUrl(category: any): string {
    if (category.image) {
      // Utilisez l'URL correcte pour obtenir l'image du serveur
      return `${this.appUrl}image/${category.id}`;
    } else {
      // Retourner une URL d'image par défaut ou une image générique si la catégorie n'a pas d'image
      return 'chemin-vers-image-par-defaut.jpg';
    }
  }
}