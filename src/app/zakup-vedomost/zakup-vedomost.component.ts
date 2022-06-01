import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {zakup, zakupIzdel} from "../classes";
import {zakazs, Zakupka, zakupVedomost} from "../Data";
import {SelectionModel} from "@angular/cdk/collections";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ExceptionZakupVedomComponent} from "../exception-zakup-vedom/exception-zakup-vedom.component";

@Component({
  selector: 'app-zakup-vedomost',
  templateUrl: './zakup-vedomost.component.html',
  styleUrls: ['./zakup-vedomost.component.scss']
})
export class ZakupVedomostComponent implements OnInit {
  displayedColumns: string[] = ['select','name', 'tech', 'number', 'number_sklad'];
  dataSource = new MatTableDataSource<zakupIzdel>();
  selection = new SelectionModel<zakupIzdel>(true, []);
  id: number = 0;
  constructor(private route: ActivatedRoute,public dialog: MatDialog,private router: Router) { }
 zakupVedom: zakup = {number: 0,
   date_start:new Date("12-09-2021"),
   iniator:'',
   project:'',
   date_plan_end:new Date("01-07-2022"),
   izdel:[]
 };
  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.id = event['id'];
    });
    const z = zakupVedomost.find(za => {return za.number == this.id});
    this.zakupVedom = z !== undefined? z :  {number: 0,
      date_start:new Date("12-09-2021"),
      iniator:'',
      project:'',
      date_plan_end:new Date("01-07-2022"),
      izdel:[]
    }
    this.dataSource = new MatTableDataSource<zakupIzdel>(this.zakupVedom.izdel);
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
  checkboxLabel(row?: zakupIzdel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${this.dataSource.data.indexOf(row)}`;
  }
  openDialog(){
      this.dialog.open(ExceptionZakupVedomComponent, {data:''}).afterClosed().subscribe(data =>{
        console.log(typeof data);
        if(data === 'null'){

        }
        else if( data === 'true'){
          console.log(data);
          this.rezerv();
          console.log(zakazs.find(a => a.zakup = this.zakupVedom.number)?.number);
          this.router.navigate(["zakaz/"+zakazs.find(a => a.zakup = this.zakupVedom.number)?.number]);
        }
        else if(data === 'false')
          this.router.navigate(["zakaz/"+zakazs.find(a => a.zakup = this.zakupVedom.number)?.number]);
      })
  }
  rezerv(){
    for(var z of this.zakupVedom.izdel){
      if(z.number-z.number_sklad >= 0){
        z.number = z.number - z.number_sklad;
        z.number_sklad = 0;
      }
      else {
        z.number_sklad = z.number_sklad- z.number;
        z.number = 0;
      }
    }
    this.dataSource = new MatTableDataSource<zakupIzdel>(this.zakupVedom.izdel)
  }
}
