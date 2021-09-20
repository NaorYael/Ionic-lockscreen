import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {Weather} from '../model/weather';
import {WeatherData} from '../model/weather-data';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    private key = '5b9a859a379226d16d7405e03c7950fc';
    private baseUrl = 'http://api.openweathermap.org/';
    private cityUrl = 'data/2.5/weather?q=';

    constructor(private http: HttpClient) {
    }

    getCountryCodeByLatAndLon(lat: number, lon: number): Observable<{ name: string }[]> {
        return this.http
            .get<{ name: string }[]>(`${this.baseUrl}geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${this.key}`)
            .pipe(
                catchError(this.handleError)
            );
    }

    getWeatherByCityName(cityName: string): Observable<Weather> {
        return this.http
            .get<WeatherData>(`${this.baseUrl}${this.cityUrl}${cityName}&appid=${this.key}`)
            .pipe(
                map(data => this.transformWeatherData(data)),
                catchError(this.handleError)
            );
    }

    private transformWeatherData(data: WeatherData): Weather {
        return {
            name: data.name,
            country: data.sys.country,
            image: data.weather[0].icon,
            description: data.weather[0].description,
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            wind: data.wind.speed,
            lat: data.coord.lat,
            lon: data.coord.lon
        } as Weather;
    }

    private handleError(res: HttpErrorResponse) {
        console.error(res);
        return throwError(res.error || 'Server error');
    }


}
