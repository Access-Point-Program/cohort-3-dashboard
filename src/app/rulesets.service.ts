import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { RulesetData } from './Ruleset';

@Injectable({
  providedIn: 'root'
})
export class RulesetsService {

  private url:string = 'http://localhost:8080/rulesets'

  constructor(private http: HttpClient) {

   }
   
   getRulesets(): Observable<RulesetData[]> {
    return this.http
      .get<RulesetData[]>(this.url)
      .pipe(catchError(this.handleError<RulesetData[]>('getRulesets', [])))
   }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
