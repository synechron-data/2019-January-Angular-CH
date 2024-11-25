import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./root.component";
import { FormsModule } from "@angular/forms";
import { ListComponent } from "./list/list.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, ListComponent, CapitalizePipe, FilterPipe],
    bootstrap: [RootComponent]
})
export class RootModule { }