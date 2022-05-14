import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {sklad, zakaz} from "../classes";
import {SelectionModel} from "@angular/cdk/collections";

const DATA:sklad[]=[
  {name_izdel:'Коммутатор',
    tech_spec:'ALLIED TELESIS AT-GS950/16-50',
    project :'LTE-Мобильная',
    number:1,
    status:'Зарезервировано (1)'
  },
  {name_izdel:'Источник питания',
    tech_spec:'APS-1262',
    project :'LTE-Мобильная',
    number:3,
    status:'Зарезервировано (3)'
  },
  {name_izdel:'Кабельная сборка',
    tech_spec:'N-male/5D-FB 5m/N-male',
    project :'Афина',
    number:5,
    status:'Свободно'
  }
]

@Component({
  selector: 'app-sklad',
  templateUrl: './sklad.component.html',
  styleUrls: ['./sklad.component.css']
})
export class SkladComponent implements OnInit {
  ds = ['num','name_izdel','tech_spec','project','number','status']
  dataSource = new MatTableDataSource<sklad>(DATA);
  value = '';
  constructor() { }

  ngOnInit(): void {
    // this.displayedColumns.setValue(['Номер счета','Проект'])
  }
}
