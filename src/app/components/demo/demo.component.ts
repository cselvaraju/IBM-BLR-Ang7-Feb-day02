import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  message;
  myText;

  constructor() {
    this.message = 'Hello World';
   }

  ngOnInit() {
    this.myText = 'Wow!';
  }

}
