// Importing necessary Angular modules and RxJS operators
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { LayoutData } from './Layouts';

@Injectable({
  providedIn: 'root'
})
export class LayoutsService {
  // API endpoint for layouts
  private url:string = 'http://localhost:9003/layouts'
    // HTTP options for setting content type
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {

   }
     // Fetch layouts from the API
   getLayouts(): Observable<LayoutData[]> {
    return this.http
      .get<LayoutData[]>(this.url)
      .pipe(catchError(this.handleError<LayoutData[]>('getLayouts', [])))
   }
     // Delete a layout by ID
   deleteLayout(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`, this.httpOptions).pipe(catchError(this.handleError<any>('getLayouts')));
    }
      // Handle HTTP errors and log them
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
