import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'products',
    templateUrl: 'products.component.html',
    styleUrls: ['./products.component.css'],
    providers: [ProductsService]
})

export class ProductsComponent implements OnInit {
    productsList: Array<Product>;

    constructor(private pService: ProductsService) { }

    ngOnInit() { 
        this.productsList = this.pService.Products;
    }
}