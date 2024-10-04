import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoireApiResponse } from 'src/app/Model/CategoireApiResponse';
import { Categorie } from 'src/app/Model/Categorie.model';
import { Page } from 'src/app/Model/Page.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl = 'http://localhost:9999/catalogue-service';

  constructor(private http: HttpClient) { }

  getPageCategories(page: number, size: number, keyword: string): Observable<Page<Categorie>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('keyword', keyword);

    return this.http.get<Page<Categorie>>(this.apiUrl + '/AllCategories', { params });
  }

  getAllCategories(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.apiUrl}/Categories`);
  }
  

  addCategorie(categorie : Categorie) :  Observable<Categorie>{
    return this.http.post<Categorie>(`${this.apiUrl}/addCategorie` , categorie);
  }
  updateCategorie(categorie: Categorie, id: number): Observable<Categorie> {

    return this.http.put<Categorie>(`${this.apiUrl}/updateCategorie/${id}`, categorie);
  }
  
  
  getCategorieById(id : number) : Observable<Categorie>{
    return this.http.get<Categorie>(`${this.apiUrl}/CategorieById/${id}`)
  }

  deleteCategory(id : number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`)
  }
   
  getRandomCategories(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.apiUrl}/randomCategories`);
  }


  getImageUrl(imagePath?: string): string {
    // Vérifie si l'imagePath est défini
    if (imagePath) {
      // Supprime le préfixe 'C:\\fakepath\\' s'il est présent
      const cleanedImagePath = imagePath.replace("C:\\fakepath\\", "");
  
      // Retourne le chemin complet de l'image depuis le serveur
      return `http://localhost:9999/catalogue-service/images/${cleanedImagePath}`;
    } else {
      // Retourne une URL par défaut ou vide, selon votre logique
      return ''; // Ou une URL par défaut appropriée
    }
  }
  
  
  getTotal():Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/totalCategorie`);
  }
  
  
  
}
