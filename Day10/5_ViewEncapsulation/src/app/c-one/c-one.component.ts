// // 1. Element Inline Style
// import { Component } from "@angular/core";

// @Component({
//     selector: 'c-one',
//     template: `
//         <div class="row">
//             <h1 class="text-info">Hello from Component One!</h1>
//             <h1 style="border-style: solid; border-width: 2px; border-color: blue;">From Component One!</h1>
//         </div>
//     `
// })
// export class COneComponent { }

// // 2. Template Inline CSS
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'c-one',
//     template: `
//         <style>
//             .card{
//                 border-style: solid; 
//                 border-width: 2px; 
//                 border-color: blue;
//             }
//         </style>
//         <div class="row">
//             <h1 class="text-info">Hello from Component One!</h1>
//             <h1 class="card">From Component One!</h1>
//         </div>
//     `,
//     encapsulation: ViewEncapsulation.Emulated
// })
// export class COneComponent { }

// // 3. Component Inline CSS
// import { Component } from "@angular/core";

// @Component({
//     selector: 'c-one',
//     styles: [
//         `
//             .card{
//                 border-style: solid; 
//                 border-width: 2px; 
//                 border-color: blue;
//             }
//         `
//     ],
//     template: `
//         <div class="row">
//             <h1 class="text-info">Hello from Component One!</h1>
//             <h1 class="card">From Component One!</h1>
//         </div>
//     `
// })
// export class COneComponent { }

// 4. External CSS
import { Component } from "@angular/core";

@Component({
    selector: 'c-one',
    styleUrls: ['./c-one.component.css'.toString()],
    template: `
        <div class="row">
            <h1 class="text-info">Hello from Component One!</h1>
            <h1 class="card1">From Component One!</h1>
        </div>
    `
})
export class COneComponent { }