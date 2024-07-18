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

          return c;
        });
      },
      error: (e) => {
        console.log('Error');        
      }
    })

  }

  sortList() {}

  nextPage() {

  }


  previousPage() {

  }

  searchRecord(event: Event) {}
}
