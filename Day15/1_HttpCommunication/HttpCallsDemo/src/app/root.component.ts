import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
    providers: [PostService]
})

export class RootComponent implements OnInit, OnDestroy {
    posts: Array<Post>;
    message: string;
    gap_Subsciption: Subscription;

    constructor(private _pService: PostService) {
        this.message = "Getting Data from the server, please wait......";
    }

    ngOnInit(): void {
        this.gap_Subsciption = this._pService.getAllPosts().subscribe((resData) => {
            this.posts = resData;
            this.message = "";
        }, (err: string) => {
            this.message = err;
        });
    }

    ngOnDestroy(): void {
        this.gap_Subsciption.unsubscribe();
    }
}

// 1. HttpCLient inside Component
// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Post } from './models/post.model';

// @Component({
//     selector: 'root',
//     templateUrl: 'root.component.html'
// })

// export class RootComponent implements OnInit {
//     posts: Array<Post>;
//     url: string;
//     message: string;

//     constructor(private httpClient: HttpClient) {
//         this.url = "https://jsonplaceholder.typicode.com/posts";
//         this.message = "Getting Data from the server, please wait......";
//     }

//     ngOnInit(): void {
//         this.httpClient.get<Array<Post>>(this.url).subscribe((resData) => {
//             this.posts = resData;
//             this.message = "";
//         }, (err: HttpErrorResponse) => {
//             this.message = err.message;
//         });
//     }
// }