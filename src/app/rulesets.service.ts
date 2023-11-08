import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { RulesetData } from './Ruleset';

@Injectable({
  providedIn: 'root'
})
export class RulesetsService {

  private url:string = 'http://localhost:8080/rulesets';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

   }
   
   getRulesets(): Observable<RulesetData[]> {
    return this.http
      .get<RulesetData[]>(this.url)
      .pipe(catchError(this.handleError<RulesetData[]>('getRulesets', [])))
   }

   deleteRuleset(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`, this.httpOptions).pipe(catchError(this.handleError<any>('getRulesets')));
    }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
