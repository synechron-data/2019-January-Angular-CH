// // 1. Element Inline Style
// import { Component } from "@angular/core";

// @Component({
//     selector: 'c-two',
//     template: `
//     <div class="row">
//         <h1 class="text-success">Hello from Component Two!</h1>
//         <h1 style="border-style: dashed; border-width: 2px; border-color: green;">From Component Two!</h1>
//     </div>
//         `
// })
// export class CTwoComponent { }

// // 2. Template Inline CSS
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'c-two',
//     template: `
//         <style>
//             .card{
//                 border-style: dashed; 
//                 border-width: 2px; 
//                 border-color: green;
//             }
//         </style>
//         <div class="row">
//             <h1 class="text-success">Hello from Component Two!</h1>
//             <h1 class="card">From Component Two!</h1>
//         </div>
//         `,
//         encapsulation: ViewEncapsulation.Emulated
// })
// export class CTwoComponent { }


// // 3. Component Inline CSS
// import { Component } from "@angular/core";

// @Component({
//     selector: 'c-two',
//     styles: [
//         `
//             .card{
//                 border-style: dashed; 
//                 border-width: 2px; 
//                 border-color: green;
//             }
//         `
//     ],
//     template: `
//         <div class="row">
//             <h1 class="text-success">Hello from Component Two!</h1>
//             <h1 class="card">From Component Two!</h1>
//         </div>
//         `
// })
// export class CTwoComponent { }

// 4. External CSS
import { Component } from "@angular/core";

@Component({
    selector: 'c-two',
    styleUrls: ['./c-two.component.css'.toString()],
    template: `
        <div class="row">
            <h1 class="text-success">Hello from Component Two!</h1>
            <h1 class="card2">From Component Two!</h1>
        </div>
        `
})
export class CTwoComponent { }