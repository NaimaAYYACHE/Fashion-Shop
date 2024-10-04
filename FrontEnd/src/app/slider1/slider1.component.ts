import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css']
})
export class Slider1Component implements OnInit {
  image: string[] = ['assets/cap1.png', 'assets/cap2.png', 'assets/cap3.png'];
  currentIndex1 = 0;
  interval: any;

  ngOnInit(): void {
    // Démarrer le défilement automatique après 3 secondes pour la première slider
    this.interval = setInterval(() => {
      this.showNextSlide1();
    }, 5000);
  }

  ngOnDestroy(): void {
    // Nettoyer l'intervalle lorsqu'on quitte le composant
    clearInterval(this.interval);
  }


  get translateValue1(): string {
    return `-${this.currentIndex1 * 100}%`;
  }

  showPrevSlide1(): void {
    this.currentIndex1 = (this.currentIndex1 - 1 + this.image.length) % this.image.length;
  }

  
  showNextSlide1(): void {
    this.currentIndex1 = (this.currentIndex1 + 1) % this.image.length;
    // Ajout de la logique pour revenir à la première image après la dernière
    if (this.currentIndex1 === 0) {
      // Optionnel : Ajoutez une pause entre la fin de la séquence et le début de la boucle
      setTimeout(() => {
        this.currentIndex1 = 0;
      }, 10);
    }
  }
  
}


