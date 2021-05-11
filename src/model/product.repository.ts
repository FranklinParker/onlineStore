import {Injectable} from '@angular/core';
import {ProductModel} from './product.model';
import {RestDatasource} from './rest.datasource';
import {Observable} from 'rxjs';

@Injectable()

export class ProductRepository {
  private products: ProductModel[] = [];
  private categories: (string | undefined)[] = [];

  constructor(private datasource: RestDatasource) {
    this.datasource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data.map((value) => value.category)
        .filter((c, index, array) => {
          // console.log('c', c);
          // console.log('index', index);
          // console.log('array', array);
          //
          return array.indexOf(c) === index;
        }).sort();
    });
  }

  getProducts(category?: string): ProductModel[] {
    return this.products.filter((prod) => !category  ||
      prod.category === category);
  }

  getCategories(): (string | undefined)[]{
    return this.categories;
  }

  getProduct(id: number): ProductModel|undefined {
    return this.products.find((prod) => prod.id === id);
  }
  saveProduct(product: ProductModel): any{
    if (product.id && product.id !== 0){
     this.datasource.updateProduct(product)
       .subscribe((p) => this.products.push(p));
    } else {
      this.datasource.saveProduct(product)
        .subscribe(p =>
          this.products.splice(this.products.findIndex(pi => pi.id === product.id), 1, p));
    }
  }

  deleteProduct(id: number): void{
    this.datasource.deleteProduct(id).subscribe(() =>
      this.products.splice(this.products.findIndex(pi => pi.id === id), 1 ));
  }
}
