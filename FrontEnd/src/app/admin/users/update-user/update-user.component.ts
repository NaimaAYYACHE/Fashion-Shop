import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { param } from 'jquery';
import { Role } from 'src/app/Model/Role.model';
import { User } from 'src/app/Model/User.model';
import { RoleService } from 'src/app/services/Role/role.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userId! : number ;
   user : User = new User();
   roles : Role[]  = [];
   selectedImage: File | null = null;

  constructor(private userService : UserService , 
              private router : ActivatedRoute ,
              private roleService : RoleService , 
              private route : Router) {}
  ngOnInit(): void {
    this.router.params.subscribe(
      (param)=> {
         this.userId = +param['id'];
        }
    )
    this.getUsers();
    this.getUserById();
  }
  getUserById():void{
    this.userService.getUserById(this.userId).subscribe(
      (data : User)=>{
        this.user = data ;
      }
    )
  }

  getUsers() : void{
    this.roleService.getRoles().subscribe(
      (data : Role[]) =>{
         this.roles = data ;
      }
    )
  }

  updateUser(){
    this.userService.updateUser(this.userId , this.user).subscribe(
      (data : User) => {
        this.goToList();
      }
    )
  }
  goToList(){
    this.route.navigate(['/users']);
  }


  getImageUrl(): string {
    return this.userService.getImageUrl(this.user.image);
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;
  
      // Extraire le nom du fichier sans le chemin complet
      const fileName = file.name.replace("C:\\fakepath\\", "");
      
      this.user.image = fileName;  // Affectez le nom du fichier à la propriété 'image'
    }
  }
}
