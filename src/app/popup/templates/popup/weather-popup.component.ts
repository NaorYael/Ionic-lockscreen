import { Weather } from './../../../model/weather';
import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-weather-popup',
  templateUrl: './weather-popup.component.html',
  styleUrls: ['./weather-popup.component.scss']
})
export class WeatherPopupComponent {

  public weather: Weather;

  constructor(public dialogRef: MatDialogRef<WeatherPopupComponent>) {

  }


}
