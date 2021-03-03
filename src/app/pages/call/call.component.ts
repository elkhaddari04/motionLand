import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class CallComponent implements OnInit {


  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

   ngOnInit() {
    console.log( document.getElementById("form"));

    document.getElementById("form").addEventListener("submit ", function(event){


    console.log('fsdfgh');

      event.preventDefault()
    });


   }




   open(content) {
    this.modalService.open(content);
  }


}
