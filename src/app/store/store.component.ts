import { Component, OnInit } from '@angular/core';
import {ProductRepository} from '../../model/product.repository';
import {ProductModel} from '../../model/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private productRepository: ProductRepository) { }

  ngOnInit(): void {
  }

  get products(): ProductModel[]{
    return this.productRepository.getProducts();
  }

  get categories(): string[]{
    return this.productRepository.getCategories() as string[];
  }
}
