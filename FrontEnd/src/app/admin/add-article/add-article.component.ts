import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Categorie } from 'src/app/Model/Categorie.model';
import { Produit } from 'src/app/Model/Produit.model';
import { ArticleService } from 'src/app/services/Article/article.service';
import { CategorieService } from 'src/app/services/Categories/categorie.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit{
  
  categories : Categorie[] = [];

  produit : Produit = new Produit();

  constructor(private produitService : ArticleService ,
              private categorieService : CategorieService ,
              private router : Router){}

  ngOnInit(): void {
    this.getCategories();
    this.produit.categorie = new Categorie();
  }


    getCategories() : void{
      this.categorieService.getAllCategories().subscribe(
        (data : Categorie[]) =>{
          this.categories = data ;
        }
      )
    }

   ajouterProduit() : void{
    this.produitService.addProduit(this.produit).subscribe(
      (data :Produit) =>{
        this.goToList();
      }
    )
   }
   
   goToList(): void{
    this.router.navigate(['/article']);
  }
}
