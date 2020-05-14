import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  restItems: any;
  totalCases: any;
  dataSource: any;
  restItemsUrl = 'https://api.covid19india.org/data.json';
  displayedColumns: string[] = ['State', 'Confirmed', 'Active', 'Recovered','Deceased'];  
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          var statewise = this.restItems.statewise;
          var test = this.restItems.statewise;
          this.totalCases = statewise[0];
          test.splice(0, 1);
          debugger;
          this.dataSource = new MatTableDataSource<PeriodicElement>(test);
          console.log(this.restItems);
          console.log(statewise);
          console.log(statewise[0])
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get(this.restItemsUrl)
      .pipe(map(data => data));
  }
}
export interface PeriodicElement {
  State: string;
  Confirmed: number;
  Active: number;
  Recovered: number;
  Deceased: number;
}
