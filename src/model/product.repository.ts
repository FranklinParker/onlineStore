import {Injectable} from '@angular/core';
import {ProductModel} from './product.model';
import {RestDatasource} from './rest.datasource';

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
}
