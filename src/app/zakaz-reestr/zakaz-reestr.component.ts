import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {zakaz, zakupka} from "../classes";
import {SelectionModel} from "@angular/cdk/collections";
import {zakazs} from "../Data";


@Component({
  selector: 'app-zakaz-reestr',
  templateUrl: './zakaz-reestr.component.html',
  styleUrls: ['./zakaz-reestr.component.css']
})
export class ZakazReestrComponent implements OnInit {
  ds = ['selected','number','date_start','project','status']
  dataSource = new MatTableDataSource<zakaz>(zakazs);
  value = '';
  selection = new SelectionModel<zakaz>(true, []);
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
  checkboxLabel(row?: zakaz): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${this.dataSource.data.indexOf(row)}`;
  }


}
