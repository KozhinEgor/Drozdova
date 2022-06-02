import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {zakazs, Zakupka} from "../Data";
import {zakaz, zakazIzdel, zakupka} from "../classes";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {DialogComponent} from "../dialog/dialog.component";
import {AddZakupkaComponent} from "../add-zakupka/add-zakupka.component";

@Component({
  selector: 'app-zakaz',
  templateUrl: './zakaz.component.html',
  styleUrls: ['./zakaz.component.scss']
})
export class ZakazComponent implements OnInit {
  id:number = 0;
  zakaz:zakaz = {
    number: 0,
    zakup: 0,
    date_start:new Date("12-09-2021"),
    date_post:new Date("12-09-2021"),
    project:'',
    status:'',
    izdel:[]};
  selectedStatus = 'Создана';
  status =['Создан','Отправлен на согласование','Не согласован','Согласован'];
  ds = ['selected', 'num', 'name','tech','price','number','sum'];
  dataSource = new MatTableDataSource<zakazIzdel>();
  constructor(private route: ActivatedRoute,public dialog: MatDialog,private router: Router) {}

  ngOnInit(): void {

    this.route.params.subscribe(event => {
      this.id = event['id'];
    });
    const z = zakazs.find(za => {return za.number == this.id});
    this.zakaz = z !== undefined? z :{
      number: 0,
      zakup: 0,
      date_start:new Date("12-09-2021"),
      date_post:new Date("12-09-2021"),
      project:'',
      status:'',
      izdel:[]};
    this.dataSource = new MatTableDataSource<zakazIzdel>(this.zakaz.izdel);
    this.selectedStatus = this.status[this.status.indexOf(this.zakaz.status)];
  }
  value = '';
  selection = new SelectionModel<zakazIzdel>(true, []);
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
  checkboxLabel(row?: zakazIzdel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${this.dataSource.data.indexOf(row)}`;
  }
  openDialog(message:string){
    this.dialog.open(DialogComponent,{data: message})
  }
  openZakup(){
    this.dialog.open(AddZakupkaComponent, {data:this.zakaz.number})
  }
  getTotalCost(){
    return this.zakaz.izdel.map(t => (t.number * t.price)).reduce((acc, value) => acc + value, 0);
  }
}
