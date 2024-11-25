import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RootComponent } from "./root.component";
import { MOneModule } from "./ModuleOne/m-one.module";
import { MTwoModule } from "./ModuleTwo/m-two.module";

@NgModule({
    imports: [BrowserModule, MOneModule, MTwoModule],
    declarations: [RootComponent],
    bootstrap: [RootComponent]
})
export class RootModule {

}