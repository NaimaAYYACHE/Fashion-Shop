import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/Categories/categorie.service';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/Model/Categorie.model';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    constructor(private categorieService :CategorieService , private router: Router){}
    
    nouvelleCategorie: Categorie = new Categorie();

    AjouterCategorie(): void{
      this.categorieService.addCategorie(this.nouvelleCategorie).subscribe(
        (categorie : Categorie) =>{
          console.log('Categorie créée :', categorie.name);
          this.goToCategorieList();
        }
      );
    }
    
    goToCategorieList() :void{
      this.router.navigate(['/categories']);
    }
   
}
