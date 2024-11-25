// 3 Using FormBuilder and Validators

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'reactive-form',
    templateUrl: 'reactive-form.component.html'
})

export class ReactiveFormComponent implements OnInit {
    regForm: FormGroup;

    constructor(private _fromBuilder: FormBuilder) { }

    ngOnInit() {
        this.regForm = this._fromBuilder.group({
            firstname: ["", Validators.required],
            lastname: ["", Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(5)
            ])],
            address: this._fromBuilder.group({
                city: ["", Validators.required],
                zip: 0
            })
        });
    }

    load() {
        this.regForm.setValue({
            firstname: "Abhijeet",
            lastname: "Gole",
            address: {
                city: "Pune",
                zip: 411029
            }
        })
    }

    patch() {
        this.regForm.patchValue({
            firstname: "Manish",
            lastname: "Sharma"
        })
    }

    logForm() {
        if (this.regForm.valid) {
            // Code to send data to Service
            console.log(this.regForm.value);
        }
        else {
            console.error("Invalid Input...");
        }
    }
}

// 2. FromBuilder
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';

// @Component({
//     selector: 'reactive-form',
//     templateUrl: 'reactive-form.component.html'
// })

// export class ReactiveFormComponent implements OnInit {
//     regForm: FormGroup;

//     constructor(private _fromBuilder: FormBuilder) { }

//     ngOnInit() {
//         this.regForm = this._fromBuilder.group({
//             firstname: "",
//             lastname: "",
//             address: this._fromBuilder.group({
//                 city: "",
//                 zip: 0
//             })
//         });
//     }

//     logForm() {
//         // Code to send data to Service
//         console.log(this.regForm.value);
//     }
// }

// 1. Using FormGroup and FormControl
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

// @Component({
//     selector: 'reactive-form',
//     templateUrl: 'reactive-form.component.html'
// })

// export class ReactiveFormComponent implements OnInit {
//     regForm: FormGroup;

//     constructor() { }

//     ngOnInit() { 
//         this.regForm = new FormGroup({
//             firstname: new FormControl(),
//             lastname: new FormControl(),
//             address: new FormGroup({
//                 city: new FormControl(),
//                 zip: new FormControl()
//             })
//         });
//     }

//     logForm() {
//         // Code to send data to Service
//         console.log(this.regForm.value);
//     }
// }