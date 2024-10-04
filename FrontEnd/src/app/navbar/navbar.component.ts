import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../services/Cart/cartservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router : Router , private cartService : CartserviceService){}
  count! : number ;
  ngOnInit(): void {
    this.getCount(1);

    this.cartService.countUpdated.subscribe((count: number) => {
      this.count = count;
    });
  }

  goToProfile(id : number){
    this.router.navigate(['/profile' , id]);
  }
  goToSetting(id : number){
    this.router.navigate(['/setting' , id]);
  }

  getCount(id:number){
    this.cartService.getCount(id).subscribe(
      (data : number)=>{
        this.count = data ; 
      }
    )
  }

}
