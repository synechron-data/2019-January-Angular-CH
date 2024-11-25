import { Component, OnInit, AfterViewInit } from "@angular/core";
// import * as $ from 'jquery';

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Data Binding</h1>
            </div>

            <assign-one></assign-one>

            <div [hidden]=flag>
                <h3>Message: {{message}}</h3>
                <!-- <input type="text" bindon-ngModel=message/>
                <input type="text" [(ngModel)]=message/>
                <input type="text" [(ngModel)]=message [ngModelOptions]="{updateOn:'blur'}"/>
                <br/>
                <button class="btn btn-info" on-click=doChange()>Click Me</button>
                <hr>
                <input type="text" [(ngModel)]=city/>
                <h4>Your City is: {{city}}</h4> -->

                <input type="text" [(ngModel)]=name (change)=doUpdate(name) (blur)=doBlur()/>
                <input type="text" [(ngModel)]=name (input)=doUpdate(name) />
            </div>
            
            <div [hidden]=flag>
                <h2 class="row">Event Binding</h2>
                <h3>Message: {{message}}</h3>
                <button class="btn btn-info" on-click=doChange()>Click Me</button>
                <button class="btn btn-info" (click)=doChange()>Click Me</button>
                <button class="btn btn-success" id="b1">Click Me - JS</button>
            </div>
            
            <div [hidden]=flag>
                <h2 class="row">Property Binding</h2>

                <h3>Message: {{message}}</h3>
                <h3 innerHTML={{message}}>Message: </h3>
                <h3 bind-innerHTML=message>Message: </h3>
                <h3 [innerHTML]=message>Message: </h3>

                <input type="text" [value]=message/>
                <span [innerText]=message></span>
            </div>
        </div>
    `
})
export class RootComponent implements AfterViewInit {
    message: string;
    flag: boolean;

    constructor() {
        this.message = "Hello";
        this.flag = true;
    }

    ngAfterViewInit(): void {
        document.getElementById("b1").addEventListener("click", () => {
            this.message = "Changed, " + new Date().toTimeString();
            console.log(this.message);
        });
    }

    doChange() {
        this.message = "Changed, " + new Date().toTimeString();
    }

    doUpdate(name: string) {
        this.message = "Your name is : " + name;
        console.log("Change");    
    }

    doBlur(){
        console.log("Blur");
    }
}