import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { ModelBasedFormComponent } from "./components/model-based/model-based.component";
import { TemplatedFormComponent } from "./components/templated/templated-form.component";
import { ReactiveFormComponent } from "./components/reactive/reactive-form.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [RootComponent, ModelBasedFormComponent, TemplatedFormComponent,
        ReactiveFormComponent],
    bootstrap: [RootComponent]
})
export class RootModule { }