import { Component, OnInit } from '@angular/core';
import {ProductRepository} from '../../../../model/product.repository';
import {ProductModel} from '../../../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productRepository: ProductRepository) { }

  ngOnInit(): void {
  }

  getProducts(): ProductModel[]{
    return this.productRepository.getProducts();
  }
  deleteProduct(id: number|undefined): void {
    this.productRepository.deleteProduct(id as number);
  }

}
