(self["webpackChunkionic_angular_lock_screen"] = self["webpackChunkionic_angular_lock_screen"] || []).push([["src_app_home_home_module_ts"],{

/***/ 1491:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.key = '5b9a859a379226d16d7405e03c7950fc';
        this.baseUrl = 'http://api.openweathermap.org/';
        this.cityUrl = 'data/2.5/weather?q=';
    }
    getCountryCodeByLatAndLon(lat, lon) {
        return this.http.get(this.baseUrl + 'geo/1.0/reverse?lat=' + lat + '&lon=' + lon + '&limit=1&appid=' + this.key + '');
    }
    getWeatherByCityName(query) {
        return this.http.get(this.baseUrl + this.cityUrl + '' + query + '&appid=' + this.key + '');
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_battery_status_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/battery-status/ngx */ 6742);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../api.service */ 1491);







let HomePage = class HomePage {
    constructor(geolocation, service, batteryStatus) {
        this.geolocation = geolocation;
        this.service = service;
        this.batteryStatus = batteryStatus;
        this.today = new Date();
        this.subArr = [];
    }
    ngOnInit() {
        this.today.toLocaleDateString();
        this.loadGeolocation();
    }
    loadGeolocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.lon = resp.coords.longitude;
            // get city from api response
            this.subArr.push(this.service.getCountryCodeByLatAndLon(this.lat, this.lon).subscribe(res => {
                this.cityname = res[0].name;
                // get weather according to the cityname
                this.service.getWeatherByCityName(this.cityname).subscribe(data => {
                    this.description = data.weather[0].description;
                    this.temp = data.main.temp;
                    this.icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
                }, error => {
                    console.log(error);
                });
            }, error => {
                console.log(error);
            }));
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    openModal() {
        console.log('foo');
    }
    checkBattery() {
        this.batterySubscription = this.batteryStatus.onChange().subscribe(status => {
            alert('Level: ' + status.level + ' Is plugged: ' + status.isPlugged);
            console.log(status.level, status.isPlugged);
            this.batteryUrl = this.handleBatteryIcon(status.level);
            // this.level = status.level;
            this.level = 0;
            this.isPlugged = status.isPlugged;
        });
    }
    stopBatteryCheck() {
        this.batterySubscription.unsubscribe();
    }
    handleBatteryIcon(level) {
        if (level === 0) {
            return 'https://fontawesome.com/v5.15/icons/battery-empty?style=solid';
        }
        if (level > 0 && level <= 25) {
            return 'https://fontawesome.com/v5.15/icons/battery-quarter?style=solid';
        }
        if (level > 25 && level <= 50) {
            return 'https://fontawesome.com/v5.15/icons/battery-half?style=solid';
        }
        if (level > 50 && level <= 75) {
            return 'https://fontawesome.com/v5.15/icons/battery-three-quarters?style=solid';
        }
        if (level > 75 && level <= 100) {
            return 'https://fontawesome.com/v5.15/icons/battery-full?style=solid';
        }
        return null;
    }
    ngOnDestroy() {
        this.subArr.forEach(s => s.unsubscribe());
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _ionic_native_battery_status_ngx__WEBPACK_IMPORTED_MODULE_2__.BatteryStatus }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".time {\n  font-size: 10vh;\n}\n\n.date, span {\n  font-size: large;\n}\n\n.title {\n  text-align: right;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nimg {\n  height: 100px;\n  width: 100px;\n}\n\n.wrapp-img {\n  text-align: right;\n  position: absolute;\n  right: 0;\n  height: 50px;\n  width: 50px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nspan {\n  /* position: relative; */\n  /* left: 17px; */\n  text-align: right;\n  position: absolute;\n  left: 0;\n  right: 55px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNNLHdCQUFBO0VBQ0YsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFJQTtFQUtFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUxGOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQVJGOztBQVdBO0VBQ0UscUJBQUE7QUFSRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS1jdXN0b20gY3NzIHN0YXJ0LS0tLS0tLS0tLS0tLS0tLS0vL1xuLnRpbWUge1xuICBmb250LXNpemU6IDEwdmg7XG59XG5cbi5kYXRlLCBzcGFuIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLndyYXBwLWltZyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5zcGFuIHtcbiAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICAvKiBsZWZ0OiAxN3B4OyAqL1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiA1NXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi8vLS0tLS0tLS1jdXN0b20gY3NzIGFuZC0tLS0tLS0tLS0tLS0tLS0tLy9cblxuI2NvbnRhaW5lciB7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vdHdpbWcwLWEuYWthbWFpaGQubmV0L2EvMTM1MDA3MjY5Mi90MS9pbWcvZnJvbnRfcGFnZS9qcC1tb3VudGFpbkAyeC5qcGcpO1xuICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAvLyBiYWNrZ3JvdW5kLXNpemU6cm91bmQoJG51bWJlcjogMTUwJSk7XG4gIC8vIGJhY2tncm91bmQtcG9zaXRpb246cmFuZG9tKCRsaW1pdDogMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"title\">\n      <span>{{level}}100%</span>\n      <div class=\"wrapp-img\">\n        <img [class]=\"batteryUrl\"/>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">\n        <span>{{level}}100%</span>\n        <div class=\"wrapp-img\">\n          <img [src]=\"batteryUrl\"/>\n        </div>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div id=\"container\">\n    <div class=\"time\">{{ today | date:'shortTime'  }}</div>\n    <div class=\"date\">{{ today | date:'fullDate'  }}</div>\n    <br>\n    <div class=\"weather\">\n      <div><strong>{{(temp) - 273.15 | number: '1.0-0'}}  ℃</strong></div>\n      <div>{{cityname}}</div>\n      <div>{{description}}</div>\n      <img [src]=\"icon\"/>\n      <button (click)=\"openModal()\">I</button>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map