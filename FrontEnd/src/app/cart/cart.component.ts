import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../services/Cart/cartservice.service';
import { Produit } from '../Model/Produit.model';
import { data, param } from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { LigneCommande } from '../Model/LigneCommande.model';
import { Commande } from '../Model/Commande.model';
import { CommandeService } from '../services/Commande/commande.service';
import { CategorieService } from '../services/Categories/categorie.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor (private cartService : CartserviceService ,
     private route : ActivatedRoute ,
      private router : Router , 
      private commandeService : CommandeService ,
      private categorieService : CategorieService){}
 
  ngOnInit(): void {
    this.route.params.subscribe(
      (param) => {
        this.userId = +param['id'];
      }
    )
    this.loadProduct();
  }

  cartProducts : LigneCommande [] = [];
  userId! : number ;
 

  cardName = '';
  cardNumber = '';
  expiryDate = '';
  cvv = '';
  shippingCost: number = 20; 
  cartid! : number ; 
  cart  : LigneCommande = new LigneCommande();
  commande : Commande = new Commande();
  




  calculateSubtotal(): number {
    // Implémentez la logique pour calculer le sous-total ici
    return this.cartProducts.reduce((total, product) => total + (product.prix! * product.quantite!), 0);
  }

  calculateTotal(): number {
    // Implémentez la logique pour calculer le total ici (sous-total + coût d'expédition, taxes, etc.)
    return this.calculateSubtotal() + this.shippingCost;
  }

  loadProduct() {
    this.cartService.getCartByUser(this.userId).subscribe(
      (data: LigneCommande[]) => {
        this.cartProducts = data.map(item => {
          item.produit!.image = this.categorieService.getImageUrl(item.produit!.image);
        
          return {
            id: item.id,
            quantite: item.quantite,
            prix: item.prix,
            produitId: item.produitId,
            userId: item.userId,
            produit: item.produit,
            user: item.user
          };
        });
      }
    );
  }
  
  

  decrementQuantity(product: LigneCommande): void {
    const decrementAmount = 1;
    if (product.quantite! > decrementAmount) {
      product.quantite! -= decrementAmount;
  
      this.cartService.updateCart(product.id!, product.quantite!).subscribe(
        (data: any) => {
          console.log('Quantité mise à jour avec succès', data);
        },
        error => {
          console.error('Erreur lors de la mise à jour de la quantité', error);
        }
      );
    }
  }
  
  incrementQuantity(product: LigneCommande) {
    product.quantite!++;
  
    this.cartService.updateCart(product.id!, product.quantite!).subscribe(
      (data: any) => {
        console.log('Quantité mise à jour avec succès', data);
      },
      error => {
        console.error('Erreur lors de la mise à jour de la quantité', error);
      }
    );
  }
  

  deleteProduct(id: number) {
    this.cartService.deletecart(id).subscribe(
      () => {
        // Mettez à jour le tableau local de produits ou effectuez d'autres actions nécessaires
        this.cartProducts = this.cartProducts.filter(product => product.id !== id);
        this.router.navigate(['/cart', this.cartid]);
  
        // Mettez à jour le compteur après la suppression
        this.cartService.getCount(this.userId).subscribe((count: number) => {
          this.cartService.triggerCountUpdate(count - 1);
        });
      },
      error => {
        console.error('Erreur lors de la suppression du produit', error);
      }
    );
  }
  

  

  
  addCommande():void{
    this.commande.status="EN_COURS";
    this.commande.totalC= this.calculateSubtotal();
    this.commande.userId = this.userId;
    this.commande.ligneCommandes = this.cartProducts
    this.commandeService.addCommand(this.commande).subscribe(
      (data : Commande) =>{

      }
    )
  }

}