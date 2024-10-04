import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { LigneCommande } from 'src/app/Model/LigneCommande.model';
import { Produit } from 'src/app/Model/Produit.model';
import { ArticleService } from 'src/app/services/Article/article.service';
import { CartserviceService } from 'src/app/services/Cart/cartservice.service';
import { CategorieService } from 'src/app/services/Categories/categorie.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  constructor(private route: ActivatedRoute , 
    private produitService : ArticleService , 
    private cartService : CartserviceService , 
    private categorieService : CategorieService) {}
  produit : Produit = new Produit();
  produitId! :  number ;
  cart : LigneCommande = new LigneCommande();

  ngOnInit(): void {
     this.route.params.subscribe(
      (param) => {
        this.produitId = +param['id'];
      }
     )
     this.loadProduit();
  }
  loadProduit():void{
    this.produitService.getProduitById(this.produitId).subscribe(
      (data : Produit)=>{
        this.produit = data ;
        this.produit.image = this.categorieService.getImageUrl(data.image);
      }
    )
  }
 
  AddToCart(userid: number, product: Produit) {
    this.cart.produitId = product.id;
    this.cart.prix = product.prix;
    this.cart.quantite = 1;
    this.cart.userId = userid;
    this.cartService.addCart(this.cart).subscribe(
      (data: LigneCommande) => {
        // Incrémenter le compteur actuel
        this.cartService.getCount(userid).subscribe((count: number) => {
          this.cartService.triggerCountUpdate(count + 1);
        });
      }
    );
  }
  
}
