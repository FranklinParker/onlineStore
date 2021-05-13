import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductRepository} from '../../../../model/product.repository';
import {ProductModel} from '../../../../model/product.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: ProductModel = new ProductModel();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productRepository: ProductRepository) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('mode') === 'edit'){
      const id = this.route.snapshot.paramMap.get('id');
      if (id){
        Object.assign(this.product, this.productRepository.getProduct(+id) as ProductModel);
        console.log('product', this.product);
      }
    }
  }

  save(form: NgForm): void {
    this.productRepository.saveProduct(this.product);
  }
}
