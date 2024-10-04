import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/Article/article.service';
import { CategorieService } from 'src/app/services/Categories/categorie.service';
import { CommandeService } from 'src/app/services/Commande/commande.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
  produits! : number;
  users! : number;
  commandes! : number;
  categories! : number;

  constructor (private articleService: ArticleService ,
               private userService: UserService , 
               private commandeService : CommandeService , 
               private categorieService : CategorieService) {}

  ngOnInit(): void {
    this.totalProduit();
    this.totalCategories();
    this.totalUser();
  }

  totalProduit(){
    this.articleService.getTotal().subscribe(
      (data : number) => {
        this.produits = data ;
      }
    )
  }

  totalCategories(){
    this.categorieService.getTotal().subscribe(
      (data : number) => {
        this.categories = data ;
      }
    )
  }

  totalUser(){
    this.userService.getTotal().subscribe(
      (data : number) => {
        this.users = data ;
      }
    )
  }
  
  totalCommandes(){
    this.commandeService.getTotal().subscribe(
      (data : number) => {
        this.commandes = data ;
      }
    )
  }
}
