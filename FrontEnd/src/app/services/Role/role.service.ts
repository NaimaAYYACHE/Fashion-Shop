import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/Model/Role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http : HttpClient) { }
  appUrl = "http://localhost:9999/Auth-service/";

  getRoles() : Observable<Role[]>{
    return this.http.get<Role[]>(`${this.appUrl}Allroles`);
  }
  
}
