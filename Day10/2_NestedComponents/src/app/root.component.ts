import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <c-one>Loading Component One.....</c-one>
            <c-two>Loading Component Two.....</c-two>
            <hr>
            <c-two>Loading Component Two Again.....</c-two>
        </div>
    `
})
export class RootComponent {

}