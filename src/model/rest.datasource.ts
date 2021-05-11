import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from './product.model';
import {OrderModel} from '../app/models/Order.model';
import {tap} from 'rxjs/operators';


const PORT = 3500;
const PROTOCAL = 'http';

@Injectable()

export class RestDatasource {
  authToken = '';
  baseUrl = '';

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${PROTOCAL}://${location.hostname}:${PORT}/`;
  }

  getProduct(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.baseUrl + 'products');
  }

  saveOrder(order: OrderModel): Observable<OrderModel> {
    return this.httpClient.post<OrderModel>(this.baseUrl + 'orders', order);
  }

  authenticate(user: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'login', {
      name: user,
      password
    })
      .pipe(
        tap( resp => this.authToken = resp.success ? resp.token : null)
      );
  }
}
