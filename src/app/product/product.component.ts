import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category/category';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
  //providers:[AlertifyService] --> lokalde servis yapma(mesela herkesin kendine ait bir sepeti olması.)
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRouted: ActivatedRoute
  ) {}

  title = 'Ürün Listesi';
  filterText = '';
  products!: Product[];

  ngOnInit() {
    this.activatedRouted.params.subscribe((params) => {
      this.productService.getProduct(params['categoryId']).subscribe((data) => {
        this.products = data;
      });
    });
  }

  addToCard(product: any) {
    this.alertifyService.success(product.name + ' Eklendi');
  }
}
