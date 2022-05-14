import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isRed(date:number){

    return date == 5 || date == 6 || date == 12 || date == 13 || date == 19 || date == 20 || date == 26 || date == 27;
``}
}
