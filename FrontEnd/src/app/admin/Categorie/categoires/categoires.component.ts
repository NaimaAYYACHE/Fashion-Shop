import { Component, OnInit } from '@angular/core';
import { CategoireApiResponse } from 'src/app/Model/CategoireApiResponse';
import { Categorie } from 'src/app/Model/Categorie.model';
import { CategorieService } from 'src/app/services/Categories/categorie.service';
import { Router } from '@angular/router';
import { Page } from 'src/app/Model/Page.model';


@Component({
  selector: 'app-categoires',
  templateUrl: './categoires.component.html',
  styleUrls: ['./categoires.component.css']
})
export class CategoiresComponent implements OnInit {
  categories: Categorie[] =[];

  currentPage = 0;
  pageSize = 4;
  totalPages!: number;
  numbersToShow: number = 3;
  searchKeyword: string = '';
  
  constructor(private categorieService: CategorieService , private router: Router) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categorieService.getPageCategories(this.currentPage, this.pageSize, this.searchKeyword).subscribe(
      (data: Page<Categorie>) => {
        this.categories = data.content.map(category => {
          // Utilisez la méthode getImageUrl pour obtenir le chemin d'image complet
          category.image = this.categorieService.getImageUrl(category.image);
          return category;
        });
  
        this.totalPages = data.totalPages;
      },
      (error) => {
        console.error('Error loading categories', error);
      }
    );
  }
  
  getToUpdate(id: number): void {
    this.router.navigate(['/updateCat', id]);
  }
  
  delete(id : number): void{
    this.categorieService.deleteCategory(id).subscribe(
      () => {
        // La suppression est réussie, effectuez les actions nécessaires, par exemple, recharger la liste des catégories.
        this.goToCategorieList();
      },
      (error) => {
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur.
        console.error('Une erreur s\'est produite lors de la suppression de la catégorie :', error);
      }
    )
  }
  goToCategorieList() {
    this.router.navigate(['/categories']).then(() => {
      window.location.reload(); // Recharge la page pour afficher la liste mise à jour des catégories
    });
  }
  
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
  

}