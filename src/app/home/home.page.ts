import {NewsService} from '../service/news.service';
import {Weather} from '../model/weather';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {BatteryStatus} from '@ionic-native/battery-status/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Subscription} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {WeatherService} from '../service/weather.service';
import {News} from '../model/news';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {WeatherPopupComponent} from "../popup/weather-popup/weather-popup.component";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

    today = new Date();
    cityName: string;
    weather: Weather;
    news: News[];
    level: number = -1;
    batteryIcon: string;

    showSpinner = false;
    newsSpinner = false;

    private subArr: Subscription[] = [];

    constructor(private geolocation: Geolocation,
                private weatherService: WeatherService,
                private newsService: NewsService,
                private batteryStatus: BatteryStatus,
                private dialog: MatDialog
    ) {
    }

    ngOnInit() {
        this.loadWeather();
        this.loadNews();

        this.checkBattery();
    }

    openModal() {
        let dialogRef: MatDialogRef<WeatherPopupComponent>;

        dialogRef = this.dialog.open(WeatherPopupComponent);

        dialogRef.componentInstance.weather = this.weather;

        return dialogRef.afterClosed();
    }

    private loadWeather() {
        this.showSpinner = true;

        this.geolocation.getCurrentPosition().then((resp) => {
            const lat = resp.coords.latitude;
            const lon = resp.coords.longitude;

            this.subArr.push(
                this.weatherService.getCountryCodeByLatAndLon(lat, lon)
                    .pipe(
                        switchMap(
                            (res) => {
                                this.cityName = res[0].name;
                                return this.weatherService.getWeatherByCityName(this.cityName);
                            }
                        )
                    ).pipe(map((weather) => {
                    weather.temperature -= 273.15;
                    weather.feelsLike -= 273.15;
                    weather.image = `../../assets/icons/${weather.image}.png`
                    return weather;
                }))
                    .subscribe((weather) => {
                            this.weather = weather;
                            this.showSpinner = false;
                        }, (error) => {
                            console.error(error);
                            this.showSpinner = false;
                        }
                    )
            );
        }).catch((error) => {
            console.error('Error getting location', error);
            this.showSpinner = false;
        });
    }

    private loadNews() {
        this.newsSpinner = true;
        this.subArr.push(
            this.newsService.getNews()
                .subscribe((news) => {
                    this.news = news;
                    this.newsSpinner = false;
                }, (error) => {
                    console.error(error);
                    this.newsSpinner = false;
                }));
    }

    private checkBattery() {
        this.batteryIcon = this.handleIcon(this.level);
        this.subArr.push(
            this.batteryStatus.onChange()
                .subscribe(status => {
                        this.level = status.level
                        this.batteryIcon = this.handleIcon(this.level);
                    },
                    (error) => {
                        console.error(error);
                    }));
    }

    private handleIcon(level: number): string {
        const baseIconUrlPrefix = 'fas fa-battery-';
        const progress =
            level <= 0 ? '0' :
                level <= 50 ?
                    level < 25 ? '25' : '50'
                    : level <= 75 ? '75' : '100';

        switch (progress) {
            case '25':
                return `${baseIconUrlPrefix}quarter`;
            case  '50':
                return `${baseIconUrlPrefix}half`;
            case  '75':
                return `${baseIconUrlPrefix}three-quarters`;
            case  '100':
                return `${baseIconUrlPrefix}full`;

            default:
                return `${baseIconUrlPrefix}empty`;
        }
    }

    ngOnDestroy(): void {
        this.subArr.forEach(s => s.unsubscribe());
    }

}
