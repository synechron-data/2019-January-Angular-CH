import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthorsRootComponent } from "./authors/components/authors-root/authors-root.component";
import { ProductsComponent } from "./components/products/products.component";
import { NotSelectedComponent } from "./components/products/ns.component";
import { ProductDetailsComponent } from "./components/products/pd.component";
import { AdminComponent } from "./components/admin/admin.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGaurd } from "./services/authgaurd.service";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'authors', component: AuthorsRootComponent },
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            { path: '', component: NotSelectedComponent },
            { path: ':id', component: ProductDetailsComponent }
        ]
    },
    { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGaurd] },
    { path: '**', component: NotFoundComponent }
];