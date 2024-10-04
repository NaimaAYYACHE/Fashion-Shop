import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Le code jQuery doit être placé dans ngAfterViewInit pour garantir que le DOM est prêt

    // Ajouter l'icône moins pour l'élément de collapse qui est ouvert par défaut
    $(".collapse.show").each(function(){
      $(this).prev(".card-header").addClass("highlight");
    });

    // Mettre en surbrillance l'élément collapsed ouvert
    $(".card-header .btn").click(function(){
      $(".card-header").not($(this).parents()).removeClass("highlight");
      $(this).parents(".card-header").toggleClass("highlight");
    });
  }
}