import {Weather} from '../../model/weather';
import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Observable} from "rxjs";

@Component({
    selector: 'app-weather-popup',
    templateUrl: './weather-popup.component.html',
    styleUrls: ['./weather-popup.component.scss']
})
export class WeatherPopupComponent {

    public weather: Weather;

    constructor(public dialogRef: MatDialogRef<WeatherPopupComponent>) {}

}
