import { Component } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  products: any[] = [
    { name: "Women's Blouse Top", image: "assets/e705032a7c9d8a9ece5516f7814d4adb.jpg", discountPercentage: 23, price: { current: '$53.55', original: '$68.88' } },
    { name: "Women's Blouse Top", image: "assets/OIP (2).jpeg", discountPercentage: 23, price: { current: '$53.55', original: '$68.88' } },
    { name: "Women's Blouse Top", image: "assets/2019-New-Women-Slippers-Stripper-Heels-Fashion-10CM-Thin-Heels-Sandals-Party-Wedding-Shoes-Woman-Pumps.jpg_640x640.webp", discountPercentage: 23, price: { current: '$53.55', original: '$68.88' } },
    { name: "Women's Blouse Top", image: "assets/5f1a68540e5a8ba51c42318e6b5483cb.jpg", discountPercentage: 23, price: { current: '$53.55', original: '$68.88' } },
  ];
}
