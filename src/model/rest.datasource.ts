import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from './product.model';


const PORT = 3500;
const PROTOCAL = 'http';

@Injectable()

export class RestDatasource{
  authToken = '';
  baseUrl = '';
  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${PROTOCAL}://${location.hostname}:${PORT}/`;
  }

  getProduct(): Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>(this.baseUrl + 'products');
  }
}
