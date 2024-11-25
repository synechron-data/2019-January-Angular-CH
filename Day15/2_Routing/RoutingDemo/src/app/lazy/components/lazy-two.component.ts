import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <h2 class="text-warning">Lazy Loaded Component Two</h2>
    `
})

export class LazyTwoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}