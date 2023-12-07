// Importing necessary modules for HTTP requests, dependency injection, and observable handling
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { RulesetData } from './Ruleset';

@Injectable({
  providedIn: 'root'
})
export class RulesetsService {
  // Define the API endpoint URL
  private url:string = '/api/rulesets';
    // Define HTTP options with headers for JSON content

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

   }
   
     // Fetch rulesets from the API
   getRulesets(): Observable<RulesetData[]> {
    return this.http
      .get<RulesetData[]>(this.url)
      .pipe(catchError(this.handleError<RulesetData[]>('getRulesets', [])))
   }

     // Delete a ruleset by its ID
   deleteRuleset(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`, this.httpOptions).pipe(catchError(this.handleError<any>('getRulesets')));
    }
  // Handle errors in HTTP requests
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // Log the error to the console

      console.log(`${operation} failed: ${error.message}`);// Log a message indicating the failure

      return of(result as T);// Return an empty result to avoid breaking the application
    };
  }
}
