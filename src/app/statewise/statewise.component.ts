import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-statewise',
  templateUrl: './statewise.component.html',
  styleUrls: ['./statewise.component.css']
})
export class StatewiseComponent implements OnInit {

  restItems: any;
  totalCases: any;
  dataSource: any;
  stateDetails: any;
  dataSelect: PeriodicElement1[];
  districtWiseData: any;
  restItemsUrl = 'https://api.covid19india.org/data.json';
  restDistUrl = 'https://api.covid19india.org/v2/state_district_wise.json';
  displayedColumns: string[] = ['State', 'Confirmed', 'Active', 'Recovered','Deceased'];  
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
    this.getRestItems1();
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak', model: 'abc'},
    {value: 'pizza-1', viewValue: 'Pizza', model: 'abc'},
    {value: 'tacos-2', viewValue: 'Tacos', model: 'abc'}
  ];
  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          var statewise = this.restItems.statewise;
          this.totalCases = statewise[0];
          statewise.splice(0, 1);
          this.dataSource = new MatTableDataSource<PeriodicElement>(statewise);
          this.dataSelect = statewise;
          
        }
      )
  }

  changeClient(data){
    var stateName = this.districtWiseData;
    for(var pbj of this.restItems.statewise){
      if(pbj.statecode == data){
        debugger;
        this.totalCases = pbj;
      }
    }
    for(var obj of this.districtWiseData){
      if(obj.statecode == data){
        this.dataSource = new MatTableDataSource<PeriodicElement>(obj.districtData);
      }
    }
    console.log(this.districtWiseData);
    debugger;
  }
    // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get(this.restItemsUrl)
      .pipe(map(data => data));
  }

  getRestItems1(): void {
    this.restItemsServiceGetRestItems1()
      .subscribe(
        restItems => {
          this.districtWiseData = restItems;
          // this.restItems = restItems;
          // var statewise = this.restItems.statewise;
          // this.totalCases = statewise[0];
          // statewise.splice(0, 1);
          // this.dataSource = new MatTableDataSource<PeriodicElement>(statewise);
          // this.dataSelect = statewise;
          
        }
      )
  }
  restItemsServiceGetRestItems1() {
    return this.http
      .get(this.restDistUrl)
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
export interface PeriodicElement1 {
  active: number;
  confirmed: number;
  deaths: number;
  deltaconfirmed: number;
  deltadeaths: number;
  deltarecovered: number;
  lastupdatedtime: Date;
  recovered: number;
  state: string;
  statecode: string;
  statenotes: string;
}

interface Food {
  value: string;
  viewValue: string;
  model: string;
}
