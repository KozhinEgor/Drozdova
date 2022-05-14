export interface window{
  name: string;
  link: string;
}
export interface zakup{
  number: number;
  date_start:Date;
  iniator:string;
  project:string;
  date_plan_end:Date;
}
export interface zakupka{
  number: number;
  date_start:Date;
  date_fin:Date;
  project:string;
  name_izdel:string,
  customer:string,
  type_zakup:string,
  status:string,
  zakup_vedom: number,
  zakaz: number
  izdel:IzdelZak[],
  postavshick: ProductPostavshick[]
}
export interface zakaz{
  number:number;
  date_start:Date;
  project:string;
  status:string;
}
export interface sklad{
  name_izdel:string;
  tech_spec:string;
  project:string;
  number:number;
  status:string;
}
export interface IzdelZak{
  name_izdel:string;
  tech_spec:string;
  price: number;
  number:number;
}
export interface ProductPostavshick{
  namePostavshick: string;
  price: number;
  srock: string;
  uslov: string;
  reiting: number;
  plan_date: Date;
  dogovor: number;
  dateDogovor: Date;
  schet: number;
  dateRascheta: Date;
  DatePoluch: Date;
}
export interface Doc{
  name: string;
  date:Date;
}
export interface ReestrPostavshik{
  name:string;
  izd:string;
  tech:string;
  price: number;
  srock: string;
  usl:string;
}
