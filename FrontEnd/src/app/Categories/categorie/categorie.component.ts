import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Categorie } from 'src/app/Model/Categorie.model';
import { CategorieService } from 'src/app/services/Categories/categorie.service';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent  implements OnInit {
  categories : Categorie [] = [];

  constructor(private categorieService : CategorieService , private router :Router){}
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
    // Ajoutez ceci à votre ngOnInit dans CategorieComponent
    this.loadCategories();
  }


  // ...

loadCategories(): void {
  this.categorieService.getRandomCategories().subscribe(
    (data: Categorie[]) => {
      this.categories = data.map(category => {
        category.image = this.categorieService.getImageUrl(category.image!);
        return category;
      });
      
    }
  );
}

// ...


  goToProduct(id : number){
    this.router.navigate(['/productByCategorie' , id]);
  }
   
   
}

