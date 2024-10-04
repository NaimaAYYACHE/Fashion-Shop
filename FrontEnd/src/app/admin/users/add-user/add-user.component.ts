import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/Model/Role.model';
import { User } from 'src/app/Model/User.model';
import { RoleService } from 'src/app/services/Role/role.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  user : User = new User();
  roles : Role[] = [];
  
  constructor(private userService :UserService , private router : Router , private roleService : RoleService){}
  
  ngOnInit(): void {
     this.getRoles();
     this.user.role = new Role();
  }

  addUser() : void{
    this.userService.addUser(this.user).subscribe(
      (data :User) =>{
        this.goToList();
      }
    )
   }
  goToList():void{
    this.router.navigate(['/users']);
  }

  getRoles(): void{
    this.roleService.getRoles().subscribe(
      (data : Role[]) => {
        this.roles  = data;
      }
    )
  }
}
