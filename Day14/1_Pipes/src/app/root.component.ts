import { Component, ViewChild, AfterViewInit } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Pipes</h1>
            </div>

            <list [personList]=pList></list>
            
            <h2>{{name}}</h2>
            <h2>{{name | uppercase}}</h2>
            <h2>{{name | capitalize}}</h2>
            <h2>{{name}}</h2>

            <h2>{{today}}</h2>
            <h2>{{today | date}}</h2>
            <h2>{{today | date:'shortDate'}}</h2>
            <h2>{{today | date:'fullDate'}}</h2>
            <h2>{{today | date:'shortTime'}}</h2>

            <button class="btn btn-success" (click)=toggle()>Toggle Format</button>
            <h2>{{today | date:format}}</h2>
        </div>
    `
})
export class RootComponent {
    pList: Array<string>;
    name: string;
    today: Date;
    flag: boolean;

    constructor() {
        this.pList = ["Manish", "Abhijeet", "Kedar", "Avinash", "Mohit", "Ashish", "Ankur", "Kumud"];
        this.name = "manish sharma";
        this.today = new Date();
    }

    get format() {
        return this.flag ? 'shortDate' : 'fullDate';
    }

    toggle() {
        this.flag = !this.flag;
    }
}