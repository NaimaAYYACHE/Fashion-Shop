import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/Model/Page.model';
import { User } from 'src/app/Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {}

  AppUrl = "http://localhost:9999/Auth-service/";
  getPageUser(page : number ,size : number , keyword : string) : Observable<Page<User>>{
     let params = new HttpParams()
     .set('page' , page.toString())
     .set('size' , size.toString())
     .set('keyword' ,keyword);

    return this.http.get<Page<User>>(`${this.AppUrl}AllUsers`, {params});
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.AppUrl}UserById/${id}`)
  }
  addUser(user : User): Observable<User>{
    return this.http.post<User>(`${this.AppUrl}addUser`,user)
  }
  updateUser(id : number ,user : User) : Observable<User>{
    return this.http.put<User>(`${this.AppUrl}/updateUser/${id}` , user);
  }
  deleteuser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.AppUrl}deleteUser/${id}`)
  }

  getTotal():Observable<number>{
    return this.http.get<number>(`${this.AppUrl}/totalUser`);
  }

  getImageUrl(imagePath?: string): string {
    // Vérifie si l'imagePath est défini
    if (imagePath) {
      // Supprime le préfixe 'C:\\fakepath\\' s'il est présent
      const cleanedImagePath = imagePath.replace("C:\\fakepath\\", "");
  
      // Retourne le chemin complet de l'image depuis le serveur
      return `${this.AppUrl}/images/${cleanedImagePath}`;
    } else {
      // Retourne une URL par défaut ou vide, selon votre logique
      return ''; // Ou une URL par défaut appropriée
    }
  }

}
