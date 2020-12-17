import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

 @Component({
  selector: 'app-qustion',
  templateUrl: './qustion.component.html',
  styleUrls: ['./qustion.component.scss'],
  providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers

})
export class QustionComponent implements OnInit {

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
  }


  ngOnInit(): void {
  }

  activeState: boolean[] = [true, false, false];

    toggle(index: number) {
        this.activeState[index] = !this.activeState[index];
    }



}
