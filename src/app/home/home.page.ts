import { NewsService } from './../news.service';
import {  ModalService } from './../popup/popup.service';
import { Weather } from './../model/weather';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ApiService } from './../api.service';
import { News } from '../model/news';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  lat: number;
  lon: number;


  today = new Date();

  cityname: string;

  weather: Weather;
  news: News;
  level: number;
  isPlugged: boolean;
  batteryIcon: string;

  subArr: Subscription[] = [];
  batterySubscription: any;

  errorMessage: any = {};

  constructor(private geolocation: Geolocation,
    private weatherService: ApiService,
    private popupService: ModalService,
    private newsService: NewsService,
    private batteryStatus: BatteryStatus
  ) { }

  ngOnInit() {
    this.today.toLocaleDateString();

    this.loadWeather();

    this.checkBattery();

    this.loadNews();
  }

  loadWeather() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;

      this.subArr.push(
        this.weatherService.getCountryCodeByLatAndLon(this.lat, this.lon)
          .pipe(
            switchMap(
              (res) => {
                this.cityname = res[0].name;
                return this.weatherService.getWeatherByCityName(this.cityname);
              }
            )
          ).subscribe((weather) => {
            this.weather = weather;
            }, (error) => {
                  console.log(this.errorMessage = error);
                }
            )
      );
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadNews() {
    this.subArr.push(
      this.newsService.getNews()
      .subscribe(news => {
        this.news = news;
    }));
  }

  checkBattery() {
    this.subArr.push(this.batteryStatus.onChange().subscribe(status => {
     // console.log('Level: ' + status.level + ' Is plugged: ' + status.isPlugged);
      this.level = status.level;
      this.batteryIcon = this.handleIcon(status.level);
      // this.isPlugged = status.isPlugged;
    }));
  }

  stopBatteryCheck() {
    this.subArr.forEach( s => s.unsubscribe());
  }

  handleIcon(level: number): string {
    const baseIconUrlPrefix = 'https://fontawesome.com/v5.15/icons/battery-';
    const baseIconUrlSufix = '?style=solid';
    const progress = level < 50 ? level < 25 ? '25' : '50' : level < 75 ?  '75' : '100';
    switch (progress) {
      case '25':
        return `${baseIconUrlPrefix}quarter${baseIconUrlSufix}`;
      case  '50':
        return `${baseIconUrlPrefix}half${baseIconUrlSufix}`;
      case  '75':
        return `${baseIconUrlPrefix}three-quarters${baseIconUrlSufix}`;
      case  '100':
        return `${baseIconUrlPrefix}full${baseIconUrlSufix}`;

      default:
        return `${baseIconUrlPrefix}empty${baseIconUrlSufix}`;
    }
  }


  openModal() {
    this.popupService.open(this.weather);
  }


  ngOnDestroy(): void {
    this.subArr.forEach(s => s.unsubscribe());
    this.stopBatteryCheck();
  }

}
