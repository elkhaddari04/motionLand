import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  ContactUs2() {
    this.router.navigate(['/call']);
      }


}
