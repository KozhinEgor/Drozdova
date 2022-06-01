import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-exception-zakup-vedom',
  templateUrl: './exception-zakup-vedom.component.html',
  styleUrls: ['./exception-zakup-vedom.component.css']
})
export class ExceptionZakupVedomComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }

}
