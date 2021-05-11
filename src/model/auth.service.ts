import {Injectable} from '@angular/core';
import {RestDatasource} from './rest.datasource';
import {Observable} from 'rxjs';

@Injectable()

export class AuthService{
  constructor(private restDataSource: RestDatasource) {
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.restDataSource.authenticate(username, password);
  }
  getAuthenticated(): boolean{
    console.log('token:' + this.restDataSource.authToken);
    return this.restDataSource.authToken !== undefined;
  }
  clear(): void{
    this.restDataSource.authToken = undefined;
  }
}
