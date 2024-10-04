import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from 'src/app/Model/Commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  appUrl= "http://localhost:9999/commande-service/";
  constructor(private http : HttpClient) {}

  addCommand(commande : Commande): Observable<Commande> {
    return this.http.post<Commande>(`${this.appUrl}addCommande`, commande);
  }
  getTotal():Observable<number>{
    return this.http.get<number>(`${this.appUrl}/totalCommande`);
  }
}
