import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'selector-name',
    template: `
        <div class="outerdiv">
            <div class="innerdiv">
                <div *ngIf="product else elseBlock">
                    <h3>{{product.name}}</h3>
                    <p>{{product.description}}</p>
                    <hr>
                    <h4>{{product.status}}</h4>
                </div>    
            </div>
        </div>
        <ng-template #elseBlock>
            <h3 class="text-danger">Product not Found..</h3>
        </ng-template>
    `
})

export class ProductDetailsComponent implements OnInit, OnDestroy {
    product: Product;
    rSub: Subscription;

    constructor(private pService: ProductsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.rSub = this.route.params.pipe(map(p => {
            return p['id'];
        })).subscribe(id => {
            this.product = this.pService.Products.find(p => p.id == id);
        });
    }

    ngOnDestroy(): void {
        this.rSub.unsubscribe();
    }
}