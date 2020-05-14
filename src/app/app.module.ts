import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';import {MatButtonModule} from '@angular/material/button';
import { WorldComponent } from './world/world.component';
import { Routes, RouterModule } from '@angular/router';
import { IndiaComponent } from './india/india.component';
import { TamilnaduComponent } from './tamilnadu/tamilnadu.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { StatewiseComponent } from './statewise/statewise.component';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
  {path:'world', component:WorldComponent},
  {path:'india', component:IndiaComponent},
  {path:'tn', component:TamilnaduComponent},
  {path:'stateWise', component:StatewiseComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    IndiaComponent,
    TamilnaduComponent,
    StatewiseComponent
  ],
  imports: [
    BrowserModule,MatCardModule,MatTableModule,
    AppRoutingModule,RouterModule.forRoot(routes),
    BrowserAnimationsModule,MatListModule,MatPaginatorModule,
    MatSidenavModule,MatButtonModule,MatSelectModule,
    MatToolbarModule,MatIconModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
