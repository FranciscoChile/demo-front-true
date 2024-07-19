import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})
export class OperationComponent {

  constructor(private api: CalculatorService) { }
  
  searchText = "";
  first_number_a = "";
  second_number_a = "";

  first_number_s = "";
  second_number_s = "";

  first_number_m = "";
  second_number_m = "";

  first_number_d = "";
  second_number_d = "";

  first_number_sq = "";

  random_string = "";

  sortList() {}


  addition() {
    this.api.addition(parseInt(this.first_number_a), parseInt(this.second_number_a), 1).subscribe({
      next: (data) => {
        console.log(data);
      },      
      error: (e) => {
        console.log('Error');
      }
    });
  }

  subtraction() {
    this.api.subtraction(parseInt(this.first_number_s), parseInt(this.second_number_s), 1).subscribe({
      next: (data) => {
        console.log(data);
      },      
      error: (e) => {
        console.log('Error');
      }
    });
  }

  multiplication() {
    this.api.multiplication(parseInt(this.first_number_m), parseInt(this.second_number_m), 1).subscribe({
      next: (data) => {
        console.log(data);
      },      
      error: (e) => {
        console.log('Error');
      }
    });
  }

  division() {
    this.api.division(parseInt(this.first_number_d), parseInt(this.second_number_d), 1).subscribe({
      next: (data) => {
        console.log(data);
      },      
      error: (e) => {
        console.log('Error');
      }
    });
  }

  squareRoot() {
    this.api.squareRoot(parseInt(this.first_number_sq),  1).subscribe({
      next: (data) => {
        console.log(data);
      },      
      error: (e) => {
        console.log('Error');
      }
    });
  }

  randomString() {
    this.api.randomString(1).subscribe({
      next: (data) => {
        console.log(data);
      },      
      error: (e) => {
        console.log('Error');
      }
    });
  }

}
