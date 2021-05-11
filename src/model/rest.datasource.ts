import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from './product.model';
import {OrderModel} from '../app/models/Order.model';
import {catchError, map } from 'rxjs/operators';


const PORT = 4210;
const PROTOCOL = 'http';

@Injectable()

export class RestDatasource {
  authToken: string| undefined;
  baseUrl = '';

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.baseUrl + 'products');
  }

  saveOrder(order: OrderModel): Observable<OrderModel> {
    return this.httpClient.post<OrderModel>(this.baseUrl + 'orders', order);
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>(this.baseUrl + 'login', {
      username,
      password
    })
      .pipe(
        map( resp => {
          console.log('resp', resp);
          this.authToken = resp.success ? resp.token : undefined;
          return resp.success;
        }),

      );
  }
}
