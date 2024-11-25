import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./root.component";
import { FormsModule } from "@angular/forms";
import { ListComponent } from "./list/list.component";
import { ChangeDirective } from "./directives/cc.directive";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, ListComponent, ChangeDirective],
    bootstrap: [RootComponent]
})
export class RootModule { }