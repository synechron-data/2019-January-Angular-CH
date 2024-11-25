import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    personList: Array<string>;
    constructor() {
        this.personList = ["Manish", "Abhijeet", "Kedar", "Avinash"];
    }

    ngOnInit() { }
}