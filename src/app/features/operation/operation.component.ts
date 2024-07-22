import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { CacheService } from '../../services/cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})
export class OperationComponent implements OnInit {

  constructor(private api: CalculatorService, private cacheService: CacheService, public router: Router) { }

  ngOnInit(): void {
    this.alert = false;
    this.isLogged();
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

  alert = false;
  errorMsg = "";
  errorMsgAlert = false;

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


  addition() {
    this.api.addition(parseInt(this.first_number_a), parseInt(this.second_number_a), 1).subscribe({
      next: (data) => {
        console.log(data);
        this.showAlert();
      },      
      error: (e) => {
        this.showAlertError(e.error.message);
        console.log('Error');
      }
    });
  }

  subtraction() {
    this.api.subtraction(parseInt(this.first_number_s), parseInt(this.second_number_s), 1).subscribe({
      next: (data) => {
        console.log(data);
        this.showAlert();
      },      
      error: (e) => {
        this.showAlertError(e.error.message);
        console.log('Error');
      }
    });
  }

  multiplication() {
    this.api.multiplication(parseInt(this.first_number_m), parseInt(this.second_number_m), 1).subscribe({
      next: (data) => {
        console.log(data);
        this.showAlert();
      },      
      error: (e) => {
        this.showAlertError(e.error.message);
        console.log('Error');
      }
    });
  }

  division() {
    this.api.division(parseInt(this.first_number_d), parseInt(this.second_number_d), 1).subscribe({
      next: (data) => {
        console.log(data);
        this.showAlert();
      },      
      error: (e) => {
        this.showAlertError(e.error.message);
        console.log('Error');
      }
    });
  }

  squareRoot() {
    this.api.squareRoot(parseInt(this.first_number_sq),  1).subscribe({
      next: (data) => {
        console.log(data);
        this.showAlert();
      },      
      error: (e) => {
        this.showAlertError(e.error.message);
        console.log('Error');
      }
    });
  }

  randomString() {
    this.api.randomString(1).subscribe({
      next: (data) => {
        console.log(data);
        this.showAlert();
      },      
      error: (e) => {
        this.showAlertError(e.error.message);
        console.log('Error');
      }
    });
  }

  showAlert(): void {
    //show box msg
    this.alert = true;
    //wait 3 Seconds and hide
    setTimeout(() => {
      this.alert = false;
    }, 1000);
    
   }

   showAlertError(msg: string): void {
    //show box msg
    this.errorMsgAlert = true;
    this.errorMsg = msg;
    //wait 3 Seconds and hide
    setTimeout(() => {
      this.errorMsgAlert = false;
      this.errorMsg = "";
    }, 1000);
    
   }

}
