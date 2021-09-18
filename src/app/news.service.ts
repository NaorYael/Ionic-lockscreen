import { NewsData } from './model/news.data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { News } from './model/news';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  public key = 'b23e4a1dacee40fe96d46b7dea0ef3ba';
  today = new Date();

  constructor(private http: HttpClient) {}

  getNews(): Observable<News> {
    return this.http
                .get<any>(`https://newsapi.org/v2/everything?q=tesla&from=${this.today.toTimeString}&sortBy=publishedAt&apiKey=${this.key}`)
                .pipe(
                 map(data => this.transformNewsData(data)),
                //  tap(data => console.log(JSON.stringify(data))),
                 catchError(this.handleError)
                 );
  }
  private transformNewsData(data: NewsData): News {
    return {
      status: data.status,
      author: data.articles[0].author,
      title: data.articles[0].title,
      description: data.articles[0].description,
      url: data.articles[0].url,
      content: data.articles[0].content
    };
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res);
    return throwError(res.error || 'Server error');
  }

}




