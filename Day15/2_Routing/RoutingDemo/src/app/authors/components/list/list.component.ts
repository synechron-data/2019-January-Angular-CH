import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../models/app.author';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
    list: Array<Author>;
    selectedAuthor: Author;

    constructor(private _aService: AuthorsService) { }

    ngOnInit() {
        this.list = this._aService.Authors;
    }

    selectAuthor(a: Author) {
        this._aService.SelectedAuthor = a;
        this.selectedAuthor = this._aService.SelectedAuthor;
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }
}