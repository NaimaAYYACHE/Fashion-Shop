import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data, error } from 'jquery';
import { Categorie } from 'src/app/Model/Categorie.model';
import { Page } from 'src/app/Model/Page.model';
import { Produit } from 'src/app/Model/Produit.model';
import { ArticleService } from 'src/app/services/Article/article.service';
import { CategorieService } from 'src/app/services/Categories/categorie.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  currentPage = 0;
  pageSize = 4;
  totalPages: number = 0;
  numbersToShow: number = 3;
  searchKeyword: string = '';
  
  produits : Produit[] = [];

  constructor(private articleService: ArticleService, private router: Router , private categorieService : CategorieService) {}

  
  ngOnInit(): void {
   this.loadProduits();
  }
   
  loadProduits(): void {
    this.articleService.getPageProduit(this.currentPage, this.pageSize, this.searchKeyword).subscribe(
      (data: Page<Produit>) => {
        this.produits = data.content.map(prod => {
          // Utilisez la méthode getImageUrl du service articleService pour obtenir le chemin d'image complet
          prod.image = this.categorieService.getImageUrl(prod.image);
          return prod;
        });
        this.totalPages = data.totalPages;
      },
      (error) => {
        console.error(error);
      }
    );
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
  
  getQuantiteBackgroundColor(quantite: number | undefined): string {
    if (quantite === undefined) {
      return 'transparent'; // Couleur par défaut si la quantité est indéfinie
    } else if (quantite >= 60 && quantite <= 80) {
      return '#A2FF86';
    } else if (quantite > 80) {
      return '#79c2d0';
    } else if (quantite >= 40 && quantite < 60) {
      return '#FFCC70';
    } else if (quantite < 40) {
      return '#F24C3D';
    } else {
      return 'transparent'; // Couleur par défaut
    }
  }
   goToupdate(id : number): void{
      this.router.navigate(['/updateArt', id] ) ;
   }
   
   delete(id: number){
    this.articleService.deleteProduit(id).subscribe(
      () =>{
        this.goToArticleList();
      }
    )
   }
   goToArticleList() {
    this.router.navigate(['/article']).then(() => {
      window.location.reload(); // Recharge la page pour afficher la liste mise à jour des catégories
    });
  }
  
}
