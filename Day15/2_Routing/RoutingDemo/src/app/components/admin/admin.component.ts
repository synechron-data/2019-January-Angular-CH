import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'selector-name',
    templateUrl: 'admin.component.html',
    providers: [UserService]
})

export class AdminComponent implements OnInit {
    users: Array<any>;

    message: string;
    gau_Subsciption: Subscription;

    constructor(private _uService: UserService) {
        this.message = "Getting Data from the server, please wait......";
    }

    ngOnInit(): void {
        this.gau_Subsciption = this._uService.getAllUsers().subscribe((resData) => {
            this.users = resData.users;
            this.message = "";
        }, (err: string) => {
            this.message = err;
        });
    }

    ngOnDestroy(): void {
        this.gau_Subsciption.unsubscribe();
    }
}