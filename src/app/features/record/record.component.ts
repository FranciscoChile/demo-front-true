import { Component, OnInit } from '@angular/core';
import { UserRecord } from '../../services/userRecord';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent implements OnInit {

  constructor(private api: CalculatorService) { }
  
  userRecordList: UserRecord[]  = [];

  searchText = "";
  flagSort = true;
  
  ngOnInit(): void {    
    this.getList();
  }

  getList() {

    this.api.getUserRecords().subscribe({
      next: (data) => {        
        const result = data.data;

        this.userRecordList = result.map((elem: any) => {
          var c = new UserRecord();

          c.id = elem.id;
          c.operationId = elem.operationId;
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

  searchRecord(event: Event) {}
}
