import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Content Projection</h1>
            </div>

            <!-- <icon-input></icon-input> -->

            <icon-input icon="@">
                <h3 class="a">Enter Email</h3>
                <input class="b" type="email"/>
            </icon-input>

            <!-- <icon-input icon="#">
                <input type="number"/>
            </icon-input> -->
        </div>
    `
})
export class RootComponent {
    constructor() {
    }
}