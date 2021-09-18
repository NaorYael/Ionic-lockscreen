import { Weather } from './../model/weather';
import { WeatherPopupComponent as WeatherPopupComponent } from './templates/popup/weather-popup.component';
import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {


  constructor(private dialog: MatDialog) {
  }


  public open(weather: Weather): Observable<boolean> {

    let dialogRef: MatDialogRef<WeatherPopupComponent>;

    dialogRef = this.dialog.open(WeatherPopupComponent);

    dialogRef.componentInstance.weather = weather;

    return dialogRef.afterClosed();
  }


}
