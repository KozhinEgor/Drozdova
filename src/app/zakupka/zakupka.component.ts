import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Doc, IzdelZak, ProductPostavshick, sklad, zakupka} from "../classes";
import {MatTableDataSource} from "@angular/material/table";
import {Zakupka} from "../Data";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-zakupka',
  templateUrl: './zakupka.component.html',
  styleUrls: ['./zakupka.component.scss']
})
export class ZakupkaComponent implements OnInit {
  id: number | undefined;
  formDoc: boolean = false;
  tender: boolean = false;
  constructor(private route: ActivatedRoute,public dialog: MatDialog) { }
  zakupka: zakupka = {
    number: 0,
    date_start:new Date(),
    date_fin: new Date(),
    project:'',
    name_izdel:'',
    customer:'',
    type_zakup:'',
    status:'',
    zakaz:0,
    zakup_vedom: 0,
    izdel:[],
    postavshick:[]
  };
  selectedStatus = 'Создана';
  status =['Создана','Выбор поставщика','Заключение договора','Ожидание оплаты', 'Ожидает доставки', 'Завершена'];
  ds =['name_izdel','tech_spec','price','number','sum'];
  dc = ['selected','number','namePost','price','srock', 'uslov','reiting'];
  dcOnePostav = ['namePost','price','plan_date', 'dogovor','dateDogovor','schet','dateRascheta','DatePoluch'];
  dsDoc = ['num','name', 'date', 'download'];
  dataSource = new MatTableDataSource<IzdelZak>();
  dataSourceDoc = new MatTableDataSource<Doc>();
  dataSourcePostav = new MatTableDataSource<ProductPostavshick>();
  OnePostav = new MatTableDataSource<ProductPostavshick>();
  maxReiting:number = 0;
  ngOnInit(): void {

    this.route.params.subscribe(event => {
      this.id = event['id'];
    });
    const z = Zakupka.find(za => {return za.number == this.id});
    this.zakupka = z !== undefined? z : {number: 0,
      date_start:new Date(),
      date_fin: new Date(),
      project:'',
      name_izdel:'',
      customer:'',
      type_zakup:'',
      status:'',
      zakaz:0,
      zakup_vedom: 0,
      izdel:[],
    postavshick:[]}
    this.dataSource = new MatTableDataSource<IzdelZak>(this.zakupka.izdel);
    this.dataSourcePostav = new MatTableDataSource<ProductPostavshick>(this.zakupka.postavshick);

    this.maxReiting = Math.max(... this.zakupka.postavshick.map(p => p.reiting ));
    this.OnePostav = new MatTableDataSource<ProductPostavshick>(this.zakupka.postavshick.filter(a => a.reiting == this.maxReiting));
    this.tender = this.zakupka.izdel[0].price*this.zakupka.izdel[0].number > 100000;

    this.selectedStatus = this.status[this.status.indexOf(this.zakupka.status)];

  }
  sposob_zakupki(): string{
    return this.tender? 'тендер':'прямая закупка';
}
  openDialog(message:string){
    this.dialog.open(DialogComponent,{data: message})
  }
  selection = new SelectionModel<ProductPostavshick>(true, []);
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourcePostav.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSourcePostav.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ProductPostavshick): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${this.dataSourcePostav.data.indexOf(row)}`;
  }
}
