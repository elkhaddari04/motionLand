import { Component, OnInit } from '@angular/core';

// part 1 decorator
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
// class 
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
