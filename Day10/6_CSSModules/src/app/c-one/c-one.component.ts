import { Component } from "@angular/core";

const styles = require('./c-one.component.css');

@Component({
    selector: 'c-one',
    template: `
        <div class="row">
            <h1 class="text-info">Hello from Component One!</h1>
            <h1 class="${styles.card}">From Component One!</h1>
        </div>
    `
})
export class COneComponent { }