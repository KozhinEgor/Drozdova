import { Component, OnInit } from '@angular/core';
import {zakup} from "../classes";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";

const DATA:zakup[]=[
  {number: 11233,
    date_start:new Date("12-09-2021"),
    iniator:'Иванов И.И.',
    project:'LTE-Мобильная',
    date_plan_end:new Date("01-07-2022")
  },
  {number: 11234,
    date_start:new Date("12-11-2021"),
    iniator:'Петров А.А.',
    project:'Афина 223',
    date_plan_end:new Date("01-19-2022")
  },
  {number: 11235,
    date_start:new Date("12-20-2021"),
    iniator:'Иванов И.И.',
    project:'LTE-Стационарная',
    date_plan_end:new Date("01-20-2022")
  },
  {number: 11236,
    date_start:new Date("12-23-2021"),
    iniator:'Петров А.А.',
    project:'LTE-Мобильная',
    date_plan_end:new Date("01-30-2022")
  }
]

@Component({
  selector: 'app-zakup',
  templateUrl: './zakup.component.html',
  styleUrls: ['./zakup.component.css']
})
export class ZakupComponent implements OnInit {
  displayedColumns: string[] = ['select','number', 'date_start', 'iniator', 'project','date_plan_end'];
  dataSource = new MatTableDataSource<zakup>(DATA);
  value = '';
  selection = new SelectionModel<zakup>(true, []);
  constructor() { }

  ngOnInit(): void {
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: zakup): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${this.dataSource.data.indexOf(row)}`;
  }

}
