import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { param } from 'jquery';
import { Categorie } from 'src/app/Model/Categorie.model';
import { Produit } from 'src/app/Model/Produit.model';
import { ArticleService } from 'src/app/services/Article/article.service';
import { CategorieService } from 'src/app/services/Categories/categorie.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit{
    
    produits : Produit[] = [];
    categories : Categorie[] = [];
    produit : Produit = new Produit();
    produitId! : number ;

    constructor(private produitService : ArticleService , 
                private route : ActivatedRoute , 
                private categorieService : CategorieService ,
                private router :Router){ }

    ngOnInit(): void {

      this.route.params.subscribe(params =>{
        this.produitId = +params['id'];
      })
      this.produitById();
      this.getCategories();
    }

    produitById() : void{
      this.produitService.getProduitById(this.produitId).subscribe(
        (prod : Produit) => {
          this.produit= prod;
        }
      )
    }

    getCategories() : void{
      this.categorieService.getAllCategories().subscribe(
        (data : Categorie[]) =>{
          this.categories = data ;
        }
      )
    }

    updateProduit():void{
      this.produitService.updateProduit(this.produitId , this.produit).subscribe(
        (data : Produit)=> {
           this.goToList();
        }
      )
    }
    
    goToList(): void{
      this.router.navigate(['/article']);
    }

}
