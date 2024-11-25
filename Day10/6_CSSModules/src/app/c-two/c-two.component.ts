import { Component } from "@angular/core";

const styles = require('./c-two.component.css');

@Component({
    selector: 'c-two',
    styleUrls: ['./c-two.component.css'.toString()],
    template: `
        <div class="row">
            <h1 class="text-success">Hello from Component Two!</h1>
            <h1 class="${styles.card}">From Component Two!</h1>
        </div>
        `
})
export class CTwoComponent { }