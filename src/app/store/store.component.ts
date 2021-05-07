import { Component, OnInit } from '@angular/core';
import {ProductRepository} from '../../model/product.repository';
import {ProductModel} from '../../model/product.model';
import {CartModel} from '../models/cart.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  currentPage = 1;
  productsPerPage = 2;
  selectedCategory: string|undefined = undefined;
  constructor(private productRepository: ProductRepository,
              private cart: CartModel) { }

  ngOnInit(): void {
  }

  get products(): ProductModel[]{
    const selectedIndex = (this.currentPage - 1) * this.productsPerPage;
    return this.productRepository.getProducts(this.selectedCategory)
      .slice(selectedIndex, selectedIndex + this.productsPerPage);
  }

  get categories(): string[]{
    return this.productRepository.getCategories() as string[];
  }

  changeCategory(category?: string): void {
    this.selectedCategory = category;
  }

  changePage(newPage: number): void{
    this.currentPage = newPage;
  }


  changePageSize(event: any): void{
    this.productsPerPage = event.target.value;
    this.changeCategory();
  }

  get pageNumbers(): number[]{
    return Array(Math.ceil(this.numberOfProductRecords / this.productsPerPage))
      .fill(0)
      .map((val, index) => index + 1 );
  }

  get numberOfProductRecords(): number{
    return this.productRepository.getProducts(this.selectedCategory).length;
  }

  isNextDisabled(): boolean {
    return this.numberOfProductRecords < (this.productsPerPage * this.currentPage);
  }
}
