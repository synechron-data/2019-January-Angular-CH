import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'templated-form',
    templateUrl: 'templated-form.component.html'
})

export class TemplatedFormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    logForm(frm: any) {
        // Code to send data to Service
        console.log(frm.value);
    }
}