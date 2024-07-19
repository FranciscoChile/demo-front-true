import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private apiUrl = environment.apiUrl +  "/api/calculator";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUserRecords(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteUserRecords(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/" + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  addition(a: number, b: number, userId: number): Observable<any> {
    var data = {values: [a, b], userId: userId};
    return this.http.post(this.apiUrl + "/add", JSON.stringify(data), this.httpOptions);
  }

  subtraction(a: number, b: number, userId: number): Observable<any> {
    var data = {values: [a, b], userId: userId};
    return this.http.post(this.apiUrl + "/sub", JSON.stringify(data), this.httpOptions);
  }

  multiplication(a: number, b: number, userId: number): Observable<any> {
    var data = {values: [a, b], userId: userId};
    return this.http.post(this.apiUrl + "/multi", JSON.stringify(data), this.httpOptions);
  }

  division(a: number, b: number, userId: number): Observable<any> {
    var data = {values: [a, b], userId: userId};
    return this.http.post(this.apiUrl + "/div", JSON.stringify(data), this.httpOptions);
  }

  squareRoot(a: number, userId: number): Observable<any> {
    var data = {values: [a], userId: userId};
    return this.http.post(this.apiUrl + "/square", JSON.stringify(data), this.httpOptions);
  }

  randomString(userId: number): Observable<any> {
    var data = {userId: userId};
    return this.http.post(this.apiUrl + "/random", JSON.stringify(data), this.httpOptions);
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => error);
  }
  
}
