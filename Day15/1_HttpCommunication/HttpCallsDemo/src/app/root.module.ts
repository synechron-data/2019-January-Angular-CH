import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    declarations: [RootComponent],
    bootstrap: [RootComponent]
})
export class RootModule { }