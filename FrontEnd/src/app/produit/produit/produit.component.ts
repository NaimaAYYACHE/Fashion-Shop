import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LigneCommande } from 'src/app/Model/LigneCommande.model';
import { Produit } from 'src/app/Model/Produit.model';
import { ArticleService } from 'src/app/services/Article/article.service';
import { CartserviceService } from 'src/app/services/Cart/cartservice.service';
import { CategorieService } from 'src/app/services/Categories/categorie.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
  produits : Produit[] = [];
  cart : LigneCommande = new LigneCommande();
  constructor(private produitService : ArticleService , private router : Router ,private cartService : CartserviceService , private categorieservice : CategorieService){}

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts():void{
      this.produitService.getRandomProducts().subscribe(
        (data:Produit []) =>{
          this.produits = data;
          this.produits = data.map(prod => {
            prod.image = this.categorieservice.getImageUrl(prod.image!);
            return prod;
          });
        }
      )
  }

 

  goToDetails(id : number){
    this.router.navigate(['/details',id]);
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
