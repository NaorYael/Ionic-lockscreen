import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Weather } from './model/weather';
import { WeatherData } from './model/weather-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public key = '5b9a859a379226d16d7405e03c7950fc';
  public baseUrl = 'http://api.openweathermap.org/';
  public cityUrl = 'data/2.5/weather?q=';

  constructor(private http: HttpClient) { }

  getCountryCodeByLatAndLon(lat: number, lon: number): Observable<any> {
    return this.http
                .get<any>(`${this.baseUrl}geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${this.key}`)
                .pipe(
                //  tap(data => console.log(JSON.stringify(data))),
                 catchError(this.handleError)
                 );
  }

  getWeatherByCityName(cityName: string): Observable<Weather> {
    return this.http
      .get<WeatherData>(`${this.baseUrl}${this.cityUrl}${cityName}&appid=${this.key}`)
      .pipe(
        map(data => this.transformWeatherData(data)),
        // tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private transformWeatherData(data: WeatherData): Weather {
    return {
      name: data.name,
      country: data.sys.country,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      description: data.weather[0].description,
      temperature: data.main.temp,
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
