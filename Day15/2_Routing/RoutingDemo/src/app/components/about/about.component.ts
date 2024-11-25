import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <h2 class="text-info">About Component</h2>
        <p>Simple Angular 6 Application with Routing</p>
    `
})

export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}