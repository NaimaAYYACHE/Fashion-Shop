import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { LigneCommande } from 'src/app/Model/LigneCommande.model';
import { Page } from 'src/app/Model/Page.model';
import { Produit } from 'src/app/Model/Produit.model';
import { ArticleService } from 'src/app/services/Article/article.service';
import { CartserviceService } from 'src/app/services/Cart/cartservice.service';
import { CategorieService } from 'src/app/services/Categories/categorie.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

    currentPage = 0;
    pageSize = 12;
    totalPages: number = 0;
    numbersToShow: number = 3;
    searchKeyword: string = '';
    produits : Produit [] = [];
    cart : LigneCommande = new LigneCommande();

   constructor(private produitService : ArticleService ,
     private router : Router , 
     private cartService : CartserviceService , 
     private categorieService : CategorieService){}
  
  ngOnInit(): void {
    this.loadProduits();
  }

  searchProduits(): void {
    this.currentPage = 0;
    this.loadProduits();
  }
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadProduits();
    }
  }
  
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadProduits();
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
    this.loadProduits();
  }
  
 

  loadProduits():void{
    this.produitService.getPageProduit(this.currentPage , this.pageSize , this.searchKeyword)
    .subscribe(
      (data : Page<Produit>) => {
        this.produits = data.content.map(pord => {
          // Utilisez la méthode getImageUrl pour obtenir le chemin d'image complet
          pord.image = this.categorieService.getImageUrl(pord.image);
        this.totalPages = data.totalPages;
        return pord;
      }
    )
  })

  }

  goToDetails(id : number){
    return this.router.navigate(['/details', id] );
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
