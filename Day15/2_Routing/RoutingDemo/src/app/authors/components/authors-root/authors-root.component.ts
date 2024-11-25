import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';

@Component({
    selector: 'authors-root',
    templateUrl: 'authors-root.component.html',
    providers: [AuthorsService]
})

export class AuthorsRootComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}