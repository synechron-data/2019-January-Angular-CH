import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./root.component";
import { FormsModule } from "@angular/forms";
import { AssignmentOneComponent } from "./assign-one/assign-one.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, AssignmentOneComponent],
    bootstrap: [RootComponent]
})
export class RootModule { }