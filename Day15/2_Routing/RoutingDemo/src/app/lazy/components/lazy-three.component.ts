import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <h2 class="text-warning">Lazy Loaded Component Three</h2>
    `
})

export class LazyThreeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}