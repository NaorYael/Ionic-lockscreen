import {NewsData} from '../model/news.data';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {News} from '../model/news';

@Injectable({
    providedIn: 'root'
})

export class NewsService {

    private key = 'b23e4a1dacee40fe96d46b7dea0ef3ba';
    private today = new Date();

    constructor(private http: HttpClient) {
    }

    getNews(): Observable<News[]> {
        return this.http
            .get<NewsData>(`https://newsapi.org/v2/everything?q=*&from=${this.today.toTimeString}&sortBy=publishedAt&language=en&apiKey=${this.key}`)
            .pipe(
                map((data) => this.transformNewsData(data)),
                catchError(this.handleError)
            );
    }

    private transformNewsData(data: NewsData): News[] {
        const newsArr: News[] = []
        data?.articles?.forEach((art) => {
            const n = {
                author: art.author,
                title: art.title,
                description: art.description,
                url: art.url,
                content: art.content
            } as News;
            newsArr.push(n);
        });
        return newsArr;
    }

    private handleError(res: HttpErrorResponse) {
        console.error(res);
        return throwError(res.error || 'Server error');
    }

}




