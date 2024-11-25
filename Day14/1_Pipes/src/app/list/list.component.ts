import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    @Input() personList: Array<string>;
    selected: string;

    constructor() { }

    ngOnInit() { }

    select(e: Event, p: string) {
        e.preventDefault();
        this.selected = p;
    }
}