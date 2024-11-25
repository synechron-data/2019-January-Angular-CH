import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Post } from "../models/post.model";
import { Injectable } from "@angular/core";
import { retry, delay, catchError, take } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";

@Injectable()
export class PostService {
    private url: string;

    constructor(private httpClient: HttpClient) {
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    // getAllPosts() {
    //     return this.httpClient.get<Array<Post>>(this.url);
    // }

    getAllPosts() {
        return this.httpClient.get<Array<Post>>(this.url).pipe(
            delay(5000),
            retry(3),
            catchError(this.handleError<any>('getAllPosts'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: HttpErrorResponse): Observable<T> => {
            // If Error, log it
            console.error(`${operation} failed: ${error.message}`);

            // return result
            return throwError('Connection Error, please try again later...');
        };
    }
}