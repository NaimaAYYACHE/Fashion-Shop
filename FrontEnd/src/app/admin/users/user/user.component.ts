import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Page } from 'src/app/Model/Page.model';
import { User } from 'src/app/Model/User.model';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  currentPage = 0;
  pageSize = 4;
  totalPages!: number;
  numbersToShow: number = 3;
  searchKeyword: string = '';
  users : User [] = [];
  
  constructor(private userService : UserService ,private router : Router){}
  ngOnInit(): void {
     this.loadUsers();
  }
    
  goToUserList() {
    this.router.navigate(['/users']).then(() => {
      window.location.reload(); // Recharge la page pour afficher la liste mise à jour des catégories
    });
  }
  
  loadUsers():void{
    this.userService.getPageUser(this.currentPage , this.pageSize , this.searchKeyword).subscribe(
      (data : Page<User>) =>{
        this.users = data.content.map(u => {
          // Utilisez la méthode getImageUrl pour obtenir le chemin d'image complet
          u.image = this.userService.getImageUrl(u.image);
          return u;
        });
  
        this.totalPages = data.totalPages;
      },
      (error) => {
        console.error('Error loading users', error);
      }
    );
  }
  
  searchUsers(): void {
    this.currentPage = 0;
    this.loadUsers();
  }
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadUsers();
    }
  }
  
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadUsers();
    }
  }
  

  

  getPageNumbers(): number[] {
    const pageNumbers: number[] = [];
  
    // Calculer le numéro de page de départ
    let startPage = this.currentPage - Math.floor(this.numbersToShow / 2);
    startPage = Math.max(startPage, 1); // Assurer que le numéro de page de départ est au moins 1
  
    // Calculer le numéro de page de fin
    const endPage = startPage + this.numbersToShow - 1;
    const maxPage = Math.min(endPage, this.totalPages); // Assurer que le numéro de page de fin ne dépasse pas le nombre total de pages
  
    // Générer les numéros de page à afficher
    for (let i = startPage; i <= maxPage; i++) {
      pageNumbers.push(i);
    }
  
    return pageNumbers;
  }
  
  goToPage(pageNumber: number): void {
    this.currentPage = pageNumber - 1 ;
    this.loadUsers();
  }

  goToUpdate(id : number){
    this.router.navigate(['/updateUser', id]);
  }
  
  delete(id : number){
    this.userService.deleteuser(id).subscribe(
      ()=>{
        this.goToUserList();
      }
    )
  }
  
}

