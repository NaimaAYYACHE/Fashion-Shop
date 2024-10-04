import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component implements OnInit {
  images: string[] = ['assets/wow.png', 'assets/101142124_bellahadid_04032017e_67.jpg', 'assets/haha.jpg'];
  currentIndex2 = 0;
  interval: any;

  ngOnInit(): void {
    // Démarrer le défilement automatique après 3 secondes pour la première slider
    this.interval = setInterval(() => {
      this.showNextSlide2();
    }, 5000);
  }

  ngOnDestroy(): void {
    // Nettoyer l'intervalle lorsqu'on quitte le composant
    clearInterval(this.interval);
  }

  get translateValue2(): string {
    return `-${this.currentIndex2 * 100}%`;
  }

  

  showPrevSlide2(): void {
    this.currentIndex2 = (this.currentIndex2 - 1 + this.images.length) % this.images.length;
  }

  
  showNextSlide2(): void {
    this.currentIndex2 = (this.currentIndex2 + 1) % this.images.length;
    // Ajout de la logique pour revenir à la première image après la dernière
    if (this.currentIndex2 === 0) {
      // Optionnel : Ajoutez une pause entre la fin de la séquence et le début de la boucle
      setTimeout(() => {
        this.currentIndex2 = 0;
      }, 1);
    }
  }

}


