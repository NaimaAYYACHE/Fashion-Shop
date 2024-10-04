import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  products: any[] = [
    { name: "Product 1", image: "assets/image1.jpg", category: "Category 1", stock: 20 },
    { name: "Product 2", image: "assets/image2.jpg", category: "Category 2", stock: 15 },
    { name: "Product 3", image: "assets/image3.jpg", category: "Category 3", stock: 30 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}