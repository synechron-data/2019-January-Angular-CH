import { NgModule } from '@angular/core';
import { LazyOneComponent } from './components/lazy-one.component';
import { RouterModule } from '@angular/router';
import { lazyRoutes } from './lazy.routes';
import { LazyTwoComponent } from './components/lazy-two.component';
import { LazyThreeComponent } from './components/lazy-three.component';

@NgModule({
    imports: [RouterModule.forChild(lazyRoutes)],
    exports: [RouterModule],
    declarations: [LazyOneComponent, LazyTwoComponent, LazyThreeComponent],
})
export class LazyModule { }
