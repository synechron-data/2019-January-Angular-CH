import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'attr-bnd',
    templateUrl: 'attr-bnd.component.html'
})

export class AttributeBindingComponent implements OnInit {
    height: number;
    width: number;

    constructor() { 
        this.height = 200;
        this.width = 200;
    }

    ngOnInit() { }
}