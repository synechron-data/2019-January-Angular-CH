import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Directives</h1>
            </div>

            <h3 change-content>Hello</h3>

            <!-- <list></list> -->

            <h2 [style.display]="name ? 'block' : 'none'">Hello, {{name}}</h2>
            <!-- <h2 *ngIf="name; else elseBlock">Hello, {{name}}</h2> -->

            <ng-template #elseBlock>
                <h2>Nothing to Display</h2>
            </ng-template> 

            <!-- <ng-template [ngIf]="name">
                <h2>Hello, {{name}}</h2>
            </ng-template> -->

            <!-- <button class="btn btn-primary" (click)="changeName()">Click</button>
            <div [ngSwitch]="person">
                <h3 *ngSwitchCase="'Mani'">Hello, Manish</h3>
                <h3 *ngSwitchCase="'Abhi'">Hello, Abhijeet</h3>
                <h3 *ngSwitchCase="'Ram'">Hello, Ramakant</h3>
            </div>-->
        </div>
    `
})
export class RootComponent {
    name: string;
    person: string;

    constructor() {
        // this.name = "Manish";
        this.person = "Mani";
    }

    get display() {
        return this.name ? 'block' : 'none';
    }

    changeName() {
        if (this.person == 'Mani')
            this.person = "Abhi";
        else
            this.person = "Mani";
    }
}