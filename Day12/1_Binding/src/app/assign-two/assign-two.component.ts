import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'assign-two',
    templateUrl: 'assign-two.component.html'
})

export class AssignmentTwoComponent implements OnInit {
    myStyles = {
        'background-color': 'green',
        'font-size': '20px',
        'color': 'white'
    };
    
    constructor() { }

    ngOnInit() { }
}