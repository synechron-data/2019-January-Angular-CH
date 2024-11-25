import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { RootComponent } from "./components/root/root.component";
import { AuthorsModule } from "./authors/authors.module";
import { BSNavigationComponent } from "./components/bs-nav/bs-nav.component";
import { HomeComponent } from "./components/home/home.component";
import { RouterModule } from "@angular/router";
import { routes } from "./root.routes";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ProductsComponent } from "./components/products/products.component";
import { NotSelectedComponent } from "./components/products/ns.component";
import { ProductDetailsComponent } from "./components/products/pd.component";
import { AdminComponent } from "./components/admin/admin.component";
import { LoginComponent } from "./components/login/login.component";
import { AutheticationService } from "./services/authentication.service";
import { AuthGaurd } from "./services/authgaurd.service";
import { TokenInterceptor } from "./services/http-interceptor.service";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
        RouterModule.forRoot(routes),
        AuthorsModule],
    declarations: [RootComponent,
        BSNavigationComponent,
        HomeComponent,
        AboutComponent,
        NotFoundComponent,
        ProductsComponent,
        NotSelectedComponent,
        ProductDetailsComponent,
        AdminComponent, LoginComponent],
    providers: [
        AutheticationService, AuthGaurd,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [RootComponent]
})
export class RootModule { }