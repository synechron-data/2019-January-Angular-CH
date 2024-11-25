import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { retry, delay, catchError, take } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";

@Injectable()
export class UserService {
    private url: string;

    constructor(private httpClient: HttpClient) {
        this.url = "http://localhost:8000/api/users";
    }

    getAllUsers() {
        return this.httpClient.get<any>(this.url).pipe(
            retry(3),
            catchError(this.handleError<any>('getAllUsers'))
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