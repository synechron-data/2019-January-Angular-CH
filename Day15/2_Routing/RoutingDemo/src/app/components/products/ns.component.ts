import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <div class="outerdiv">
            <div class="innerdiv">
                <h3 class="text-warning">Please select a product</h3>
            </div>
        </div>
    `
})

export class NotSelectedComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}