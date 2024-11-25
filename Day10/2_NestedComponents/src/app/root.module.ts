import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { COneComponent } from "./c-one.component";
import { CTwoComponent } from "./c-two.component";
import { RootComponent } from "./root.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [RootComponent, COneComponent, CTwoComponent],
    bootstrap: [RootComponent]
})
export class RootModule {

}