import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InstaService {
  public POSTS = 'http://localhost:3001/posts';
  public COMMENTS = 'http://localhost:3001/comments';
  public LIKES = 'http://localhost:3001/likes';

  private headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin',
  });

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<any> {
    return this.http.get(`${this.POSTS}`).pipe(catchError(this.handleError));
  }

  public getComments(): Observable<any> {
    return this.http.get(`${this.COMMENTS}`).pipe(catchError(this.handleError));
  }

  public getLikes(): Observable<any> {
    return this.http.get(`${this.LIKES}`).pipe(catchError(this.handleError));
  }

  protected handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}
