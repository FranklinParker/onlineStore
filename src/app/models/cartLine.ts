import {ProductModel} from '../../model/product.model';

export class CartLine{
  constructor(public product: ProductModel,
              public quantity: number) {
  }

  get lineTotal(): number{
    const {price } = this.product;
    return this.quantity * (price ? price : 0);
  }

}
