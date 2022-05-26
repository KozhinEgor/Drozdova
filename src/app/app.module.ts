import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import { ZakupComponent } from './zakup/zakup.component';
import { ZakupVedomostComponent } from './zakup-vedomost/zakup-vedomost.component';
import { SkladComponent } from './sklad/sklad.component';
import { ZakazComponent } from './zakaz/zakaz.component';

import { ZakupkaComponent } from './zakupka/zakupka.component';
import { ZakupkaReestrComponent } from './zakupka-reestr/zakupka-reestr.component';
import { PostavshikComponent } from './postavshik/postavshik.component';
import { PostavshikReestrComponent } from './postavshik-reestr/postavshik-reestr.component';
import { OtchetComponent } from './otchet/otchet.component';
import { ZakazReestrComponent } from './zakaz-reestr/zakaz-reestr.component';
import {DocumentsComponent} from "./documents/documents.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTabsModule} from "@angular/material/tabs";

const routes = [
  {path: 'home', component: HomeComponent},
  {path: 'otchet', component: OtchetComponent},
  {path: 'postavshikReestr', component: PostavshikReestrComponent},
  {path: 'reestrZakaz', component: ZakazReestrComponent},
  {path: 'sklad', component: SkladComponent},
  {path: 'zakaz', component: ZakazComponent},
  {path: 'zakup', component: ZakupComponent},
  {path: 'zakupVedomost', component: ZakupVedomostComponent},
  {path: 'zakupkaReestr', component: ZakupkaReestrComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'zakupka/:id', component: ZakupkaComponent},
  {path: 'postavshik/:id', component: PostavshikComponent},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZakupComponent,
    ZakupVedomostComponent,
    SkladComponent,
    ZakazComponent,
    ZakupkaComponent,
    ZakupkaReestrComponent,
    PostavshikComponent,
    PostavshikReestrComponent,
    OtchetComponent,
    ZakazReestrComponent,
    DialogComponent,
    DocumentsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
