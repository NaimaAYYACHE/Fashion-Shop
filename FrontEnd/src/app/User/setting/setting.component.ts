import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { param } from 'jquery';
import { User } from 'src/app/Model/User.model';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit{
  
  user :  User = new User();
  
  constructor(private userService : UserService,private router : ActivatedRoute , private route : Router){}

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

  updateUser(){
    this.userService.updateUser(this.userId , this.user).subscribe(
      (data : User) => {
        
      }
    )
  }

  goToProfile(){
    this.route.navigate(['/profile',this.userId]);
  }
}
