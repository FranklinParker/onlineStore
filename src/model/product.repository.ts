import {Injectable} from '@angular/core';
import {ProductModel} from './product.model';
import {StaticDataSource} from './staticDataSource';

@Injectable()

export class ProductRepository {
  private products: ProductModel[] = [];
  private categories: (string | undefined)[] = [];

  constructor(private datasource: StaticDataSource) {
    this.datasource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data.map((value) => value.category)
        .filter((c, index, array) =>
          array.indexOf(c) === index).sort();
    });
  }

  getProducts(category: string): ProductModel[] {
    return this.products.filter((prod) => category === null ||
      prod.category === category);
  }

  getProduct(id: number): ProductModel|undefined {
    return this.products.find((prod) => prod.id === id);
  }
}
