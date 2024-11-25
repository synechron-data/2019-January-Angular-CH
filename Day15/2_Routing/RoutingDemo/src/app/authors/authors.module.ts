import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AuthorsRootComponent } from './components/authors-root/authors-root.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [AuthorsRootComponent, ListComponent, QuoteComponent],
    exports: [AuthorsRootComponent],
})
export class AuthorsModule { }
