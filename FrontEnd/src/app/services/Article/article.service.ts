import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { param } from 'jquery';
import { Observable } from 'rxjs';
import { Page } from 'src/app/Model/Page.model';
import { Produit } from 'src/app/Model/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient ) {}

  AppUrl = "http://localhost:9999/catalogue-service"
  getPageProduit(page : number , size : number , keyword:string) :Observable<Page<Produit>>{
      let params = new HttpParams()
      .set('page' , page.toString())
      .set('size' , size.toString())
      .set('keyword' , keyword)
      return this.http.get<Page<Produit>>(`${this.AppUrl}/AllProduits`, {params});
  }
  
  getProduitById(id: number): Observable<Produit>{
    return this.http.get<Produit>(`${this.AppUrl}/produitById/${id}`)
  }
  updateProduit(id : number , produit : Produit): Observable<Produit>{
    return this.http.put<Produit>(`${this.AppUrl}/updateProduit/${id}`,produit);
  }
  deleteProduit(id : number): Observable<void>{
   return this.http.delete<void>(`${this.AppUrl}/deleteProduit/${id}`);
  }
  addProduit(produit : Produit):Observable<Produit>{
    return this.http.post<Produit>(`${this.AppUrl}/addProduit` , produit);
  }
  getRandomProducts():Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.AppUrl}/randomProduit`);
  }


  getProduitByCategorie(page: number, size: number, keyword: string, id: number): Observable<Page<Produit>> {
    let params = new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
        .set('keyword', keyword);

    return this.http.get<Page<Produit>>(`${this.AppUrl}/produitByCategorie/${id}`, { params });
  }


  getProduitByQuantite(page: number, size: number, keyword: string): Observable<Page<Produit>> {
    let params = new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
        .set('keyword', keyword);

    return this.http.get<Page<Produit>>(`${this.AppUrl}/produitsWithQuantiteLessThan`, { params });
}

    getTotal():Observable<number>{
      return this.http.get<number>(`${this.AppUrl}/totalProduit`);
    }



}
