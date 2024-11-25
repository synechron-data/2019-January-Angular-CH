import { Component, OnInit } from '@angular/core';
import { IPerson } from '../../models/person.model';

@Component({
    selector: 'model-based',
    templateUrl: 'model-based.component.html'
})

export class ModelBasedFormComponent implements OnInit {
    person: IPerson;
    constructor() { }

    ngOnInit() {
        this.person = {
            firstname: "",
            lastname: "",
            address: {
                city: "",
                zip: 0
            }
        };
    }

    logForm(){
        // Code to send data to Service
        console.log(this.person);
    }
}