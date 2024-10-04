import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { Produit } from 'src/app/Model/Produit.model';
import { User } from 'src/app/Model/User.model';
import { ArticleService } from 'src/app/services/Article/article.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  
  user :  User = new Produit();
  
  constructor(private userService : UserService,private router : ActivatedRoute){}



  userId! : number ;
  ngOnInit(): void {
     this.router.params.subscribe(
      (params)=>{
          this.userId = +params['id']; 
     })
     this.loadUser();
  }

  loadUser(){
    this.userService.getUserById(this.userId).subscribe(
      (data : User) => {
        this.user= data;
        this.user.image = this.userService.getImageUrl(data.image);
      }
    )
  }

}
