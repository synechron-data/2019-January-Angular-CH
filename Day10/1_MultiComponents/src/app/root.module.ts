import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { COneComponent } from "./c-one.component";
import { CTwoComponent } from "./c-two.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [COneComponent, CTwoComponent],
    bootstrap: [COneComponent, CTwoComponent]
})
export class RootModule {

}