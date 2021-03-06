import {ProdPost, ProductPostavshick, ReestrPostavshik, zakaz, zakup, zakupka} from "./classes";

export const Zakupka:zakupka[] = [
  {number: 1331,
    date_start:new Date("12-09-2021"),
    date_fin: new Date("01-09-2022"),
    project:'LTE-Мобильная',
    name_izdel:'Коммутатор',
    customer:'ООО "ДНС Ритейл"',
    type_zakup:'Прямая закупка',
    status:'Создана',
    zakaz:11233,
    zakup_vedom: 1782,
    izdel:[{
      name_izdel: 'Коммутатор',
      tech_spec:'ALLIED TELESIS AT-GS950/16-50',
      price: 10216,
      number: 1
    }],
    postavshick:[{
      namePostavshick: 'ООО "ВКС"',
      price: 10500,
      srock: '1 неделя',
      uslov: 'Предоплата',
      reiting: 3,
      plan_date: new Date('12-25-2021'),
      dogovor: 112,
      dateDogovor: new Date('12-25-2021'),
      schet: 131,
      dateRascheta: new Date('12-25-2021'),
      DatePoluch: new Date('12-25-2021'),
    },
      {
        namePostavshick: 'ООО "СИТИЛИНК"',
        price: 11000,
        srock: '1 месяц',
        uslov: 'Постоплата',
        reiting: 2,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      }, {
        namePostavshick: 'ООО "ДНС Ритейл"',
        price: 10000,
        srock: '2 недели',
        uslov: 'Постоплата',
        reiting: 10,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      },{
        namePostavshick: 'ООО "Т2 Мобайл"',
        price: 12000,
        srock: '2 месяца',
        uslov: 'Частичная предоплата',
        reiting: 4,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      }]
  },
  {number: 1332,
    date_start:new Date("12-11-2021"),
    date_fin: new Date("01-09-2022"),
    project:'Афина',
    name_izdel:'Источник питания',
    customer:'ООО "М-Инвест""',
    type_zakup:'Тендер',
    status:'Выбор поставщика',
    zakaz:11233,
    zakup_vedom: 1782,
    izdel:[{
      name_izdel: 'Источник питания',
      tech_spec:'APS-1262',
      price: 19500,
      number: 10
    }],
    postavshick:[{
      namePostavshick: 'ООО "ВКС"',
      price: 19500,
      srock: '1 неделя',
      uslov: 'Предоплата',
      reiting: 3,
      plan_date: new Date('12-25-2021'),
      dogovor: 112,
      dateDogovor: new Date('12-25-2021'),
      schet: 131,
      dateRascheta: new Date('12-25-2021'),
      DatePoluch: new Date('12-25-2021'),
    },
      {
        namePostavshick: 'ООО "СИТИЛИНК"',
        price: 11000,
        srock: '1 месяц',
        uslov: 'Постоплата',
        reiting: 2,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      }, {
        namePostavshick: 'ООО "ДНС Ритейл"',
        price: 10000,
        srock: '2 недели',
        uslov: 'Постоплата',
        reiting: 10,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      },{
        namePostavshick: 'ООО "Т2 Мобайл"',
        price: 12000,
        srock: '2 месяца',
        uslov: 'Частичная предоплата',
        reiting: 4,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      }]
  },
  {number: 1333,
    date_start:new Date("12-29-2021"),
    date_fin: new Date("01-09-2022"),
    project:'AMGH',
    name_izdel:'Резистор',
    customer:'ООО "ЭЛЕКТРОН ИМПОРТКОМПЛЕКТ"',
    type_zakup:'Прямая закупка',
    status:'Заключение договора',
    zakaz:11233,
    zakup_vedom: 1782,
    izdel:[{
      name_izdel: 'Коммутатор',
      tech_spec:'ALLIED TELESIS AT-GS950/16-50',
      price: 10216,
      number: 1
    }],
    postavshick:[{
      namePostavshick: 'ООО "ВКС"',
      price: 10500,
      srock: '1 неделя',
      uslov: 'Предоплата',
      reiting: 3,
      plan_date: new Date('12-25-2021'),
      dogovor: 112,
      dateDogovor: new Date('12-25-2021'),
      schet: 131,
      dateRascheta: new Date('12-25-2021'),
      DatePoluch: new Date('12-25-2021'),
    },
      {
        namePostavshick: 'ООО "СИТИЛИНК"',
        price: 11000,
        srock: '1 месяц',
        uslov: 'Постоплата',
        reiting: 2,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      }, {
        namePostavshick: 'ООО "ДНС Ритейл"',
        price: 10000,
        srock: '2 недели',
        uslov: 'Постоплата',
        reiting: 10,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      },{
        namePostavshick: 'ООО "Т2 Мобайл"',
        price: 12000,
        srock: '2 месяца',
        uslov: 'Частичная предоплата',
        reiting: 4,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      }]
  },
  {number: 1334,
    date_start:new Date("01-01-2022"),
    date_fin: new Date("01-09-2022"),
    project:'LTE-Advanced',
    name_izdel:'Кабель питания',
    customer:'ООО "Микротех"',
    type_zakup:'Прямая закупка',
    status:'Ожидание оплаты',
    zakaz:11233,
    zakup_vedom: 1782,
    izdel:[{
      name_izdel: 'Коммутатор',
      tech_spec:'ALLIED TELESIS AT-GS950/16-50',
      price: 10216,
      number: 1
    }],
    postavshick:[{
      namePostavshick: 'ООО "ВКС"',
      price: 10500,
      srock: '1 неделя',
      uslov: 'Предоплата',
      reiting: 3,
      plan_date: new Date('12-25-2021'),
      dogovor: 112,
      dateDogovor: new Date('12-25-2021'),
      schet: 131,
      dateRascheta: new Date('12-25-2021'),
      DatePoluch: new Date('12-25-2021'),
    },
      {
        namePostavshick: 'ООО "СИТИЛИНК"',
        price: 11000,
        srock: '1 месяц',
        uslov: 'Постоплата',
        reiting: 2,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      }, {
        namePostavshick: 'ООО "ДНС Ритейл"',
        price: 10000,
        srock: '2 недели',
        uslov: 'Постоплата',
        reiting: 10,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      },{
        namePostavshick: 'ООО "Т2 Мобайл"',
        price: 12000,
        srock: '2 месяца',
        uslov: 'Частичная предоплата',
        reiting: 4,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      }]
  },
  {number: 1335,
    date_start:new Date("01-11-2022"),
    date_fin: new Date("01-09-2022"),
    project:'ZNVR',
    name_izdel:'Переходник',
    customer:'ООО "ФРЕГАТ"',
    type_zakup:'Прямая закупка',
    status:'Завершена',
    zakaz:11233,
    zakup_vedom: 1782,
    izdel:[{
      name_izdel: 'Коммутатор',
      tech_spec:'ALLIED TELESIS AT-GS950/16-50',
      price: 10216,
      number: 1
    }],
    postavshick:[{
      namePostavshick: 'ООО "ВКС"',
      price: 10500,
      srock: '1 неделя',
      uslov: 'Предоплата',
      reiting: 3,
      plan_date: new Date('12-25-2021'),
      dogovor: 112,
      dateDogovor: new Date('12-25-2021'),
      schet: 131,
      dateRascheta: new Date('12-25-2021'),
      DatePoluch: new Date('12-25-2021'),
    },
      {
        namePostavshick: 'ООО "СИТИЛИНК"',
        price: 11000,
        srock: '1 месяц',
        uslov: 'Постоплата',
        reiting: 2,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      }, {
        namePostavshick: 'ООО "ДНС Ритейл"',
        price: 10000,
        srock: '2 недели',
        uslov: 'Постоплата',
        reiting: 10,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      },{
        namePostavshick: 'ООО "Т2 Мобайл"',
        price: 12000,
        srock: '2 месяца',
        uslov: 'Частичная предоплата',
        reiting: 4,
        plan_date: new Date('12-25-2021'),
        dogovor: 112,
        dateDogovor: new Date('12-25-2021'),
        schet: 131,
        dateRascheta: new Date('12-25-2021'),
        DatePoluch: new Date('12-25-2021'),
      }]
  }
]
export const Postav: ReestrPostavshik[] = [
  {
  name:'ООО "ДНС Ритейл"',
  reiting: 9.6,
  number_zak: 12,
  fio_cont: 'Иванов Иван Иванович',
  email_cont: 'ivan@ya.ru',
  dol_cont: 'менеджер',
  tel_cont: '89156532113',
  sait: 'dns-reteil.ru',
  address: 'Москва',
  inn: '123456768765',
  kpp: '123312456789',
  bik: '123444',
  rasChet: '321435222',
  korSchet: '123123123',
  prod:[{
    name_izdel:'Коммутатор',
    tech_spec:'ALLIED TELESIS AT-GS950/16-50',
    price: 10216,
    srock: '1 неделя',
    uslov: 'Постоплата',
    reiting: 10
  },
    {
      name_izdel:'Источник питания',
      tech_spec:'APS-1262',
      price: 19500,
      srock: '1 месяц',
      uslov: 'Предоплата',
      reiting: 9.5
    },
    {
      name_izdel:'Кабель питания',
      tech_spec:'N-male/5D-FB 5m/N-male',
      price: 7200,
      srock: '2 недели',
      uslov: 'Постоплата',
      reiting: 8.7
    },
    {
      name_izdel:'Антенна',
      tech_spec:'AGATA MIMO 2x2 (3G MIMO + 4G MIMO)',
      price: 5247,
      srock: '3 недели',
      uslov: 'Частичная предоплата',
      reiting: 9.6
    }
  ]
},
  {
    name:'ООО "М-Инвест"',
    reiting: 8.6,
    number_zak: 7,
    fio_cont: 'Алекесей Васильев Воробьев',
    email_cont: 'ilVasVob@ya.ru',
    dol_cont: 'менеджер',
    tel_cont: '89156532113',
    sait: 'dns-reteil.ru',
    address: 'Москва',
    inn: '123454328765',
    kpp: '123312456789',
    bik: '123444',
    rasChet: '321435222',
    korSchet: '123123123',
    prod:[{
      name_izdel:'Коммутатор',
      tech_spec:'ALLIED TELESIS AT-GS950/16-50',
      price: 10216,
      srock: '1 неделя',
      uslov: 'Постоплата',
      reiting: 4
    },
      {
        name_izdel:'Источник питания',
        tech_spec:'APS-1262',
        price: 19500,
        srock: '1 месяц',
        uslov: 'Предоплата',
        reiting: 4
      },
      {
        name_izdel:'Кабель питания',
        tech_spec:'N-male/5D-FB 5m/N-male',
        price: 7200,
        srock: '2 недели',
        uslov: 'Постоплата',
        reiting: 4
      },
      {
        name_izdel:'Антенна',
        tech_spec:'AGATA MIMO 2x2 (3G MIMO + 4G MIMO)',
        price: 5247,
        srock: '3 недели',
        uslov: 'Частичная предоплата',
        reiting: 4
      }
    ]
  },
  {
    name:'ООО "Микротех"',
    reiting: 9.3,
    number_zak: 9,
    fio_cont: 'Иванов Петрович Петр',
    email_cont: 'ivanPetrovich@ya.ru',
    dol_cont: 'менеджер',
    tel_cont: '89156532113',
    sait: 'dns-reteil.ru',
    address: 'Москва',
    inn: '321456768765',
    kpp: '123312456789',
    bik: '123444',
    rasChet: '321435222',
    korSchet: '123123123',
    prod:[{
      name_izdel:'Коммутатор',
      tech_spec:'ALLIED TELESIS AT-GS950/16-50',
      price: 10216,
      srock: '1 неделя',
      uslov: 'Постоплата',
      reiting: 4
    },
      {
        name_izdel:'Источник питания',
        tech_spec:'APS-1262',
        price: 19500,
        srock: '1 месяц',
        uslov: 'Предоплата',
        reiting: 4
      },
      {
        name_izdel:'Кабель питания',
        tech_spec:'N-male/5D-FB 5m/N-male',
        price: 7200,
        srock: '2 недели',
        uslov: 'Постоплата',
        reiting: 4
      },
      {
        name_izdel:'Антенна',
        tech_spec:'AGATA MIMO 2x2 (3G MIMO + 4G MIMO)',
        price: 5247,
        srock: '3 недели',
        uslov: 'Частичная предоплата',
        reiting: 4
      }
    ]
  },
  {
    name:'ООО "ФРЕГАТ"',
    reiting: 7.8,
    number_zak: 5,
    fio_cont: 'Петр Иван Иванович',
    email_cont: 'petr@ya.ru',
    dol_cont: 'менеджер',
    tel_cont: '89156532113',
    sait: 'dns-reteil.ru',
    address: 'Москва',
    inn: '123456762345',
    kpp: '123312456789',
    bik: '123444',
    rasChet: '321435222',
    korSchet: '123123123',
    prod:[{
      name_izdel:'Коммутатор',
      tech_spec:'ALLIED TELESIS AT-GS950/16-50',
      price: 10216,
      srock: '1 неделя',
      uslov: 'Постоплата',
      reiting: 4
    },
      {
        name_izdel:'Источник питания',
        tech_spec:'APS-1262',
        price: 19500,
        srock: '1 месяц',
        uslov: 'Предоплата',
        reiting: 4
      },
      {
        name_izdel:'Кабель питания',
        tech_spec:'N-male/5D-FB 5m/N-male',
        price: 7200,
        srock: '2 недели',
        uslov: 'Постоплата',
        reiting: 4
      },
      {
        name_izdel:'Антенна',
        tech_spec:'AGATA MIMO 2x2 (3G MIMO + 4G MIMO)',
        price: 5247,
        srock: '3 недели',
        uslov: 'Частичная предоплата',
        reiting: 4
      }
    ]
  }
]
export const zakupVedomost:zakup[]=[
  {number: 11233,
    date_start:new Date("12-09-2021"),
    iniator:'Иванов И.И.',
    project:'LTE-Мобильная',
    date_plan_end:new Date("01-07-2022"),
    izdel:[{
    name:'Коммутатор',
      tech_spec:'ALLIED TELESIS AT-GS950/16-50',
      number:2,
      number_sklad:1
    },
      {
        name:'Антенна',
        tech_spec:'AGATA MIMO 2x2 (3G MIMO + 4G MIMO)',
        number:3,
        number_sklad:0
      },{
        name:'Источник питания импульсный',
        tech_spec:'0-60V-30A/QJE',
        number:1,
        number_sklad:0
      },{
        name:'Источник питания',
        tech_spec:'APS-1262',
        number:5,
        number_sklad:6
      }]
  },
  {number: 11234,
    date_start:new Date("12-11-2021"),
    iniator:'Петров А.А.',
    project:'Афина 223',
    date_plan_end:new Date("01-19-2022"),
    izdel:[]
  },
  {number: 11235,
    date_start:new Date("12-20-2021"),
    iniator:'Иванов И.И.',
    project:'LTE-Стационарная',
    date_plan_end:new Date("01-20-2022"),
    izdel:[]
  },
  {number: 11236,
    date_start:new Date("12-23-2021"),
    iniator:'Петров А.А.',
    project:'LTE-Мобильная',
    date_plan_end:new Date("01-30-2022"),
    izdel:[]
  }
]

export const zakazs:zakaz[]=[{
  number: 11233,
  zakup: 11233,
  date_start:new Date("12-09-2021"),
  date_post:new Date("01-09-2022"),
  project:'LTE-Мобильная',
  status:'Согласован',
  izdel:[{
    name:'Коммутатор',
    tech:'ALLIED TELESIS AT-GS950/16-50',
    price:10216,
    number:1
  },{
    name:'Антенна',
    tech:'AGATA MIMO 2x2 (3G MIMO + 4G MIMO)',
    price:5247,
    number:3
  },{
    name:'Источник питания импульсный',
    tech:'0-60V-30A/QJE',
    price:20600,
    number:1
  },{
    name:'Источник питания',
    tech:'APS-1262',
    price:19500,
    number:10
  }]
},
  {number: 1332,
    zakup: 11234,
    date_start:new Date("12-11-2021"),
    date_post:new Date("01-09-2022"),
    project:'Афина',
    status:'Не согласован',
    izdel:[{
      name:'Коммутатор',
      tech:'ALLIED TELESIS AT-GS950/16-50',
      price:10216,
      number:1
    },{
      name:'Антенна',
      tech:'AGATA MIMO 2x2 (3G MIMO + 4G MIMO)',
      price:5247,
      number:3
    },{
      name:'Источник питания импульсный',
      tech:'0-60V-30A/QJE',
      price:20600,
      number:1
    },{
      name:'Источник питания',
      tech:'APS-1262',
      price:19500,
      number:10
    }]
  },
  {number: 1333,
    zakup: 11235,
    date_start:new Date("12-29-2021"),
    date_post:new Date("01-09-2022"),
    project:'AMGH',
    status:'Отправлен на согласование',
    izdel:[{
      name:'Коммутатор',
      tech:'ALLIED TELESIS AT-GS950/16-50',
      price:10216,
      number:1
    },{
      name:'Антенна',
      tech:'AGATA MIMO 2x2 (3G MIMO + 4G MIMO)',
      price:5247,
      number:3
    },{
      name:'Источник питания импульсный',
      tech:'0-60V-30A/QJE',
      price:20600,
      number:1
    },{
      name:'Источник питания',
      tech:'APS-1262',
      price:19500,
      number:10
    }]
  },
  {number: 1334,
    zakup: 11236,
    date_start:new Date("01-01-2022"),
    date_post:new Date("01-09-2022"),
    project:'LTE-Advanced',
    status:'Создан',
    izdel:[{
      name:'Коммутатор',
      tech:'ALLIED TELESIS AT-GS950/16-50',
      price:10216,
      number:1
    },{
      name:'Антенна',
      tech:'AGATA MIMO 2x2 (3G MIMO + 4G MIMO)',
      price:5247,
      number:3
    },{
      name:'Источник питания импульсный',
      tech:'0-60V-30A/QJE',
      price:20600,
      number:1
    },{
      name:'Источник питания',
      tech:'APS-1262',
      price:19500,
      number:10
    }]
  },
  {number: 1335,
    zakup: 11236,
    date_start:new Date("01-11-2022"),
    date_post:new Date("01-09-2022"),
    project:'ZNVR',
    status:'Создан',
    izdel:[{
      name:'Коммутатор',
      tech:'ALLIED TELESIS AT-GS950/16-50',
      price:10216,
      number:1
    },{
      name:'Антенна',
      tech:'AGATA MIMO 2x2 (3G MIMO + 4G MIMO)',
      price:5247,
      number:3
    },{
      name:'Источник питания импульсный',
      tech:'0-60V-30A/QJE',
      price:20600,
      number:1
    },{
      name:'Источник питания',
      tech:'APS-1262',
      price:19500,
      number:10
    }]
  }
]
