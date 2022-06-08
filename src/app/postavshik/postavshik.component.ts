import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Postav, Zakupka} from "../Data";
import {ProdPost, ReestrPostavshik} from "../classes";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-postavshik',
  templateUrl: './postavshik.component.html',
  styleUrls: ['./postavshik.component.scss']
})
export class PostavshikComponent implements OnInit {
  inn: string | undefined;
  post: ReestrPostavshik = { name:'',
    reiting: 0,
    number_zak:0,
    fio_cont: '',
    email_cont: '',
    dol_cont: '',
    tel_cont: '',
    sait: '',
    address: '',
    inn: '',
    kpp: '',
    bik: '',
    rasChet: '',
    korSchet: '',
    prod:[]
  };
  ds: string[] = ['num','name_izdel','tech_spec','price','srock','uslov','reiting','edit']
  dataSource = new MatTableDataSource<ProdPost>();
  constructor(private route: ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.route.params.subscribe(event => {
      this.inn = event['id'];
    });

    const z = Postav.find(za => {return za.inn == this.inn});
    this.post = z !== undefined? z :{ name:'',
      reiting: 0,
      number_zak:0,
      fio_cont: '',
      email_cont: '',
      dol_cont: '',
      tel_cont: '',
      sait: '',
      address: '',
      inn: '',
      kpp: '',
      bik: '',
      rasChet: '',
      korSchet: '',
      prod:[]
    };
    this.dataSource = new MatTableDataSource<ProdPost>(this.post.prod);
  }

}
