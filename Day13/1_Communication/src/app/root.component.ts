import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Communication</h1>
            </div>

            <h2 *ngIf=message class="alert alert-danger">{{message}}</h2>

            <counter #c1 (onmax)=maxedOut($event)></counter>
            <br>
            <div class="row">
                <div class="col-md-2">
                    <button class="btn btn-danger btn-block" (click)=c1.reset()>Parent Reset</button>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-danger btn-block" (click)=p_reset(c1)>Parent Reset</button>
                </div>
            </div>

            <!-- <counter></counter>
            <counter [interval]=10></counter> -->

            <!-- <list [personList]=pList></list> -->
        </div>
    `
})
export class RootComponent implements AfterViewInit {
    pList: Array<string>;
    message: string;

    @ViewChild(CounterComponent)
    counter1: CounterComponent;

    ngAfterViewInit() {
        // this.counter1.interval = 10;
    }

    constructor() {
        this.pList = ["Manish", "Abhijeet", "Kedar", "Avinash"];
    }

    p_reset(c: CounterComponent) {
        c.reset();
    }

    maxedOut(flag: boolean) {
        if (flag)
            this.message = "Max Click Reached, reset to continue....";
        else
            this.message = "";
    }
}