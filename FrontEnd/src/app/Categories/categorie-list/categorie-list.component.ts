import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/Model/Categorie.model';
import { Page } from 'src/app/Model/Page.model';
import { CategorieService } from 'src/app/services/Categories/categorie.service';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent  implements OnInit {
  categories : Categorie [] = [];

  currentPage = 0;
  pageSize = 9;
  totalPages!: number;
  numbersToShow: number = 3;
  searchKeyword: string = '';

  constructor(private categorieService : CategorieService , private router : Router){}
  // Assurez-vous que categories est correctement initialisé avec vos données.
  categoriess: any[] = [
    { name: 'Femmes', image: 'assets/1562142144338040237.jpg' },
    { name: 'Homme', image: 'assets/da78f1ac16faf11dd81827bbefa72ff6.jpg' },
    { name: 'Curvy', image: 'assets/5d3e220f2e008816cb953dc8417eb95c.png' },
    { name: 'Enfant', image: 'assets/22784bbfbd7cb30eba779dc2c005bfdf.jpg' },
    { name: 'Sac', image: 'assets/1352801276018167808.jpg' }, //4cc8849c544c702140b7d45b6c17eb7b.jpg
    { name: 'Sport', image: 'assets/4cc8849c544c702140b7d45b6c17eb7b.jpg' },
    { name: 'Beauté', image: 'assets/review_shein_makeup_skinny_brow_pencil_-_shape_-_set_eyebrow_pencil_-_gel_duo_-_concealer_-_eyeliner_-_lipbalm_sheglam_review_shein_make-up.png' },
    { name: 'Home', image: 'assets/5cdfcf3a6fd01a5c98b7cf7fe199fd7f.jpg' },
  ];




  ngOnInit(): void {
       this.loadCategories();
  }
  
  loadCategories(): void {
    this.categorieService.getPageCategories(this.currentPage, this.pageSize, this.searchKeyword).subscribe(
      (data: Page<Categorie>) => {
        // Appel de la méthode pour charger les images des catégories
        this.categories = data.content.map(category => {
          // Utilisez la méthode getImageUrl pour obtenir le chemin d'image complet
          category.image = this.categorieService.getImageUrl(category.image);
          return category;
        });
  
        this.totalPages = data.totalPages;
      }
    );
  }
  

  // Fonction pour diviser un tableau en groupes de la taille spécifiée.
  searchCategories(): void {
    this.currentPage = 0;
    this.loadCategories();
  }
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadCategories();
    }
  }
  
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadCategories();
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
    this.loadCategories();
  }

  goToProduct(id : number){
    this.router.navigate(['/productByCategorie' , id]);
  }
   
}


