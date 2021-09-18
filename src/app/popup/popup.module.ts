import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {ModalService} from './popup.service';
import {WeatherPopupComponent} from './templates/popup/weather-popup.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    FlexModule,
  ],
  declarations: [WeatherPopupComponent],
  exports: [WeatherPopupComponent],
  entryComponents: [WeatherPopupComponent],
  providers: [ModalService]
})
export class PopupModule { }
