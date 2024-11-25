import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../models/app.author';

@Component({
    selector: 'quote',
    templateUrl: 'quote.component.html',
    styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit, OnDestroy {
    selectedAuthor: Author;
    sac_Subscription: Subscription;

    constructor(private _aService: AuthorsService) { }

    ngOnInit() {
        this.sac_Subscription = this._aService.SelectedAuthorChanged.subscribe(() => {
            this.selectedAuthor = this._aService.SelectedAuthor;
        });
    }

    ngOnDestroy(): void {
        this.sac_Subscription.unsubscribe();
    }
}