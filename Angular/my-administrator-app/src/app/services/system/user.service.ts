import { Injectable } from '@angular/core';
import { User } from "../../model/system/interfaces/User";

import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { 

  }

  url = 'http://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<User[]> { 
  	return this.httpClient.get<User[]>(this.url).
           pipe(
             tap(users => console.log(`fetched users`)),
             catchError(this.handleError('getUsers', []))
           );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
