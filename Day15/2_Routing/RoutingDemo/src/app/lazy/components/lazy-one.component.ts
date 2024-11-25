import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <h2 class="text-warning">Lazy Loaded Component One</h2>
        <a routerLink="/lazy/c2">Component 2</a>
        <br/>
        <a routerLink="/lazy/c3">Component 3</a>
    `
})

export class LazyOneComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}