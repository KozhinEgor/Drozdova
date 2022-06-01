import { Component, OnInit } from '@angular/core';
import {zakup} from "../classes";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {zakupVedomost} from "../Data";



@Component({
  selector: 'app-zakup',
  templateUrl: './zakup.component.html',
  styleUrls: ['./zakup.component.css']
})
export class ZakupComponent implements OnInit {
  displayedColumns: string[] = ['select','number', 'date_start', 'iniator', 'project','date_plan_end'];
  dataSource = new MatTableDataSource<zakup>(zakupVedomost);
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
