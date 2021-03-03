import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  playver : boolean = false ;
  playver2 : boolean = false ;
  playver3 : boolean = false ;
  playver4 : boolean = false ;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  ContactUs2() {
    this.router.navigate(['/call']);
      }


  palyvideo1(){
    this.playver=!this.playver;
  }
  palyvideo2(){
    this.playver2=!this.playver2;
  }
  palyvideo3(){
    this.playver3=!this.playver3;
  }
  palyvideo4(){
    this.playver4=!this.playver4;
  }

}
