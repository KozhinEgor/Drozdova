import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ReestrPostavshik, sklad, zakupka} from "../classes";
import {SelectionModel} from "@angular/cdk/collections";
import {Postav} from "../Data";

@Component({
  selector: 'app-postavshik-reestr',
  templateUrl: './postavshik-reestr.component.html',
  styleUrls: ['./postavshik-reestr.component.css']
})
export class PostavshikReestrComponent implements OnInit {
  ds = ['selected','num','name','reiting','number_zak','fio_cont','email_cont'];
  dataSource = new MatTableDataSource<ReestrPostavshik>(Postav);
  value = '';
  constructor() { }

  ngOnInit(): void {
  }

  selection = new SelectionModel<ReestrPostavshik>(true, []);

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
  checkboxLabel(row?: ReestrPostavshik): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${this.dataSource.data.indexOf(row)}`;
  }
}
