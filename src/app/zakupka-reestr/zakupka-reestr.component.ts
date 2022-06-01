import {Component, OnInit, ViewChild} from '@angular/core';
import {zakup, zakupka} from "../classes";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {FormControl} from "@angular/forms";
import {Zakupka} from "../Data";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-zakupka-reestr',
  templateUrl: './zakupka-reestr.component.html',
  styleUrls: ['./zakupka-reestr.component.css']
})
export class ZakupkaReestrComponent implements OnInit {
  displayedColumns = new FormControl();
  ds = ['selected','number','date_start','name_izdel','project', 'customer','type_zakup','status']
  displayedColumnsList: string[] = ['Технические характеристики', 'Количество', 'Срок поставки', 'Цена', 'Сумма', 'Дата поставки','Номер счета','Дата расчета','Номер договора','Дата договора','Проект'];

  dataSource = new MatTableDataSource<zakupka>(Zakupka);
  value = '';
  selection = new SelectionModel<zakupka>(true, []);
  constructor() { }

  ngOnInit(): void {
    // this.displayedColumns.setValue(['Номер счета','Проект'])
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
  checkboxLabel(row?: zakupka): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${this.dataSource.data.indexOf(row)}`;
  }

}
