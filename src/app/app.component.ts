import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Loader
  isLoading: boolean ;
  isContact: boolean =true;

  constructor(private router: Router) {
     };


  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });


    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 600);

   }

   ngDoCheck()	{
    if(this.router.url=="/call"){
      this.isContact=false ;
    }else{
      this.isContact=true ;

    }

   }






  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

}
