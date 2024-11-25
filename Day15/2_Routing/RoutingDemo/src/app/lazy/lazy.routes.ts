import { Routes } from "@angular/router";
import { LazyOneComponent } from "./components/lazy-one.component";
import { LazyTwoComponent } from "./components/lazy-two.component";
import { LazyThreeComponent } from "./components/lazy-three.component";

export const lazyRoutes: Routes = [
    { path: '', component: LazyOneComponent },
    { path: 'c2', component: LazyTwoComponent },
    { path: 'c3', component: LazyThreeComponent }
];