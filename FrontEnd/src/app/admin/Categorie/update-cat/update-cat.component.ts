import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/Categories/categorie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/Model/Categorie.model';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {
  categorie: Categorie = new Categorie();
  categorieId!: number;
  selectedImage: File | null = null;

  constructor(private categorieService: CategorieService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categorieId = +params['id'];
    });
    this.getCategorieById();
  }

  getCategorieById(): void {
    this.categorieService.getCategorieById(this.categorieId).subscribe(
      (cat: Categorie) => {
        this.categorie = cat;
      },
      (error) => {
        console.error('Error fetching category:', error);
      }
    );
  } 
  
  // Modifiez la méthode onFileSelected pour extraire le nom du fichier
onFileSelected(event: any): void {
  const file: File = event.target.files[0];
  if (file) {
    this.selectedImage = file;

    // Extraire le nom du fichier sans le chemin complet
    const fileName = file.name.replace("C:\\fakepath\\", "");
    
    this.categorie.image = fileName;  // Affectez le nom du fichier à la propriété 'image'
  }
}

  
 
  getImageUrl(): string {
    return this.categorieService.getImageUrl(this.categorie.image);
  }


  updateCategorie(): void {
    this.categorieService.updateCategorie ( this.categorie , this.categorieId ).subscribe(
      (updatedCategorie: Categorie) => {
        this.goToList();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la catégorie :', error);
      }
    );
  }
  
  

  goToList(): void {
    this.router.navigate(['/categories']);
  }

  
}
