import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { LayoutData } from './Layouts';

@Injectable({
  providedIn: 'root'
})
export class LayoutsService {

  private url:string = 'http://localhost:9003/layouts'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {

   }
   
   getLayouts(): Observable<LayoutData[]> {
    return this.http
      .get<LayoutData[]>(this.url)
      .pipe(catchError(this.handleError<LayoutData[]>('getLayouts', [])))
   }
   deleteLayout(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`, this.httpOptions).pipe(catchError(this.handleError<any>('getLayouts')));
    }
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
