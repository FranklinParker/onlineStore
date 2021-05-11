import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParamsOptions} from '@angular/common/http';
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

  updateOrder(order: OrderModel): Observable<OrderModel> {
    return this.httpClient.put<OrderModel>(`${this.baseUrl}orders/${order.id}`,
      order, this.getOptions());
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}orders/${id}`, this.getOptions());
  }


  getOrders(): Observable<OrderModel[]>{
    return this.httpClient.get<OrderModel[]>(this.baseUrl + 'orders', this.getOptions());
  }

  saveProduct(product: ProductModel): Observable<ProductModel> {
    return this.httpClient.post<ProductModel>(this.baseUrl + 'products',
      product, this.getOptions());
  }

  updateProduct(product: ProductModel): Observable<ProductModel> {
    return this.httpClient.put<ProductModel>(`${this.baseUrl}products/${product.id}`,
      product, this.getOptions());
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete<ProductModel>(`${this.baseUrl}products/${id}`, this.getOptions());
  }
  authenticate(username: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>(this.baseUrl + 'login', {
      username,
      password
    })
      .pipe(
        map( resp => {
          this.authToken = resp.success ? resp.token : undefined;
          return resp.success;
        }),

      );
  }

  private getOptions(): {  }{
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.authToken}>`
      })
    };
  }
}
