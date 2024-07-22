import { Component, OnInit } from '@angular/core';
import { UserRecord } from '../../services/userRecord';
import { CalculatorService } from '../../services/calculator.service';
import { CacheService } from '../../services/cache.service';
import { Router } from '@angular/router';
import { PagingConfig } from '../../services/paging-config.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent implements OnInit, PagingConfig {

  constructor(private api: CalculatorService, private cacheService: CacheService, public router: Router) { }

  currentPage:number  = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  
  userRecordList: UserRecord[]  = [];
  pagingConfig: PagingConfig = {} as PagingConfig;

  searchText = "";
  flagSort = true;

  ngOnInit(): void {    
    this.getList();
    this.isLogged();

    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }

  }

  isLogged(): void {
    const cachedData = this.cacheService.get("logged");

    // Si los datos no están en caché, los recuperamos del servidor y los almacenamos en la caché.
    if (cachedData !== undefined) {
      console.log("logeado");
    } 
    else {
      this.router.navigate(['/login']);
      console.log("no logeado");
    }
  }

  getList() {

    this.api.getUserRecords().subscribe({
      next: (data) => {        
        const result = data.data;

        this.userRecordList = result.map((elem: any) => {
          var c = new UserRecord();

          c.id = elem.id;
          c.operationType = elem.operationType;
          c.userId = elem.userId;
          c.amount = elem.amount;
          c.operationResponse = elem.operationResponse;
          c.date = elem.date;

          return c;
        });
      },
      error: (e) => {
        console.log('Error');        
      }
    })

  }

  sortList() {
    if (this.flagSort)
      this.userRecordList.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
    else 
      this.userRecordList.sort((a,b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0))
    
      this.flagSort = !this.flagSort;
  }

  nextPage() {

  }


  previousPage() {

  }

  delete(id: number) {
    this.api.deleteUserRecords(id).subscribe({
      next: (data) => {
        this.getList();
      },      
      error: (e) => {
        console.log('Error');
      }
    });

  }

  onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
    this.getList();
  }


}
