import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Zakupka} from "../Data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-zakupka',
  templateUrl: './add-zakupka.component.html',
  styleUrls: ['./add-zakupka.component.css']
})
export class AddZakupkaComponent implements OnInit {
  numberZakupka: number[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: number, private router:Router) { }

  ngOnInit(): void {
    this.numberZakupka = Zakupka.filter(a => a.zakaz == this.data).map(a => a.number)
  }

}
