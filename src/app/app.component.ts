import {Component, Injectable} from '@angular/core';
import {window} from "./classes";
import {Router} from "@angular/router";
import {WindowsService} from "./WindowsService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // windows: window[] = [{name:'Закупка №1331',link:'/zakupka/1331'}];
  title = 'Drozdova';

constructor(public router: Router) {

}
  // open(window:window){
  //       // this.router.navigate([window.link]);
  // }

}
