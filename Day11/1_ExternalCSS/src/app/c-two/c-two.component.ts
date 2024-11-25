import { Component } from "@angular/core";

@Component({
    selector: 'c-two',
    styleUrls: ['./c-two.component.css'],
    template: `
        <div class="row">
            <h1 class="text-success">Hello from Component Two!</h1>
            <h1 class="card">From Component Two!</h1>
        </div>
        `
})
export class CTwoComponent { }