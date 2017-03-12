webpackJsonp([1,4],{

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clock__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stopwatch__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__count_up__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__count_down__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabata__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rounds__ = __webpack_require__(518);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODES; });






var MODES = [
    { display: "X1", label: "Clock", impl: new __WEBPACK_IMPORTED_MODULE_0__clock__["a" /* Clock */]("X1") },
    { display: "00", label: "Stopwatch", impl: new __WEBPACK_IMPORTED_MODULE_1__stopwatch__["a" /* Stopwatch */]("00") },
    { display: "VP", label: "Count Up", impl: new __WEBPACK_IMPORTED_MODULE_2__count_up__["a" /* CountUp */]("VP") },
    { display: "DN", label: "Count Down", impl: new __WEBPACK_IMPORTED_MODULE_3__count_down__["a" /* CountDown */]("DN") },
    { display: "F1", label: "Tabata", impl: new __WEBPACK_IMPORTED_MODULE_4__tabata__["a" /* Tabata */]("F1") },
    { display: "A1", label: "Rounds", impl: new __WEBPACK_IMPORTED_MODULE_5__rounds__["a" /* Rounds */]("A1") }
];
//# sourceMappingURL=modes.js.map

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 401;


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(521);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beeper__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modes__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(beeper) {
        this.beeper = beeper;
        this.menuVisible = false;
        this.fullScreenActive = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.selectedMode = __WEBPACK_IMPORTED_MODULE_2__modes__["a" /* MODES */][0];
        this.display = this.selectedMode.impl;
        this.display.start();
    };
    AppComponent.prototype.setMode = function (mode) {
        this.display = mode.impl;
        this.display.reset();
        if (!this.display.supportsStartStop) {
            this.display.start();
        }
        this.menuVisible = false;
    };
    AppComponent.prototype.toggleRunning = function () {
        this.beeper.buttonBeep();
        if (this.display.running || this.display.countingDown) {
            this.display.stop();
        }
        else if (this.display.pristine) {
            this.display.start();
        }
        else {
            this.display.reset();
        }
    };
    AppComponent.prototype.toggleFullScreen = function () {
        this.beeper.buttonBeep();
        if (this.fullScreenActive) {
            this.cancelFullscreen();
        }
        else {
            this.launchFullScreen();
        }
        this.fullScreenActive = !this.fullScreenActive;
    };
    AppComponent.prototype.toggleMenu = function () {
        this.beeper.buttonBeep();
        this.menuVisible = !this.menuVisible;
    };
    AppComponent.prototype.launchFullScreen = function () {
        var element = document.getElementById('container');
        if (element.requestFullScreen) {
            element.requestFullScreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
        else if (element.msRequestFullScreen) {
            element.msRequestFullScreen();
        }
    };
    AppComponent.prototype.cancelFullscreen = function () {
        var doc = document;
        if (doc.cancelFullScreen) {
            doc.cancelFullScreen();
        }
        else if (doc.mozCancelFullScreen) {
            doc.mozCancelFullScreen();
        }
        else if (doc.webkitCancelFullScreen) {
            doc.webkitCancelFullScreen();
        }
        else if (doc.msCancelFullScreen) {
            doc.msCancelFullScreen();
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(581),
            styles: [__webpack_require__(575)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__beeper__["a" /* Beeper */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__beeper__["a" /* Beeper */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__digits_input_digits_input_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mode_selector_mode_selector_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__beeper__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__digits_input_digits_input_component__["a" /* DigitsInputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__mode_selector_mode_selector_component__["a" /* ModeSelectorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__beeper__["a" /* Beeper */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clock; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var Clock = (function (_super) {
    __extends(Clock, _super);
    function Clock(modeDisplay) {
        _super.call(this, modeDisplay);
        this.colonVisible = false;
        this.running = false;
        this.supportsStartStop = false;
    }
    Clock.prototype.tick = function () {
        var _this = this;
        if (this.running) {
            setTimeout(function () {
                _this.active = true;
                var now = __WEBPACK_IMPORTED_MODULE_1_moment__();
                _this.mode = 'X1';
                _this.time1 = now.format("HH");
                _this.time2 = now.format("mm");
                _this.colonVisible = now.valueOf() % 1000 > 500;
                _this.tick();
            }, 50);
        }
    };
    Clock.prototype.time1DuringCountdown = function () {
        return "00";
    };
    Clock.prototype.time2DuringCountdown = function () {
        return "00";
    };
    Clock.prototype.modeForReset = function () {
        return "88";
    };
    Clock.prototype.time1ForReset = function () {
        return "88";
    };
    Clock.prototype.time2ForReset = function () {
        return "88";
    };
    return Clock;
}(__WEBPACK_IMPORTED_MODULE_0__display__["a" /* Display */]));
//# sourceMappingURL=clock.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountDown; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var CountDown = (function (_super) {
    __extends(CountDown, _super);
    function CountDown(modeDisplay) {
        _super.call(this, modeDisplay);
        this.startTimeString = "00:10";
        this.running = false;
        this.active = true;
        this.colonVisible = true;
        this.supportsStartStop = true;
    }
    CountDown.prototype.time1DuringCountdown = function () {
        return this.startTimeString.substring(0, 2);
    };
    CountDown.prototype.time2DuringCountdown = function () {
        return this.startTimeString.substring(3);
    };
    CountDown.prototype.tick = function () {
        var _this = this;
        if (!this.targetTimestamp) {
            var startTimeDiff = __WEBPACK_IMPORTED_MODULE_1_moment__("2000-01-01T00:" + this.startTimeString).diff(__WEBPACK_IMPORTED_MODULE_1_moment__("2000-01-01T00:00:00"));
            this.targetTimestamp = __WEBPACK_IMPORTED_MODULE_1_moment__().add(__WEBPACK_IMPORTED_MODULE_1_moment__["duration"](startTimeDiff).asMilliseconds(), 'milliseconds');
        }
        if (this.running) {
            setTimeout(function () {
                var diff = _this.targetTimestamp.diff(__WEBPACK_IMPORTED_MODULE_1_moment__());
                var currentTimeDisplay = __WEBPACK_IMPORTED_MODULE_1_moment__["utc"](__WEBPACK_IMPORTED_MODULE_1_moment__["duration"](diff).asMilliseconds());
                _this.time1 = currentTimeDisplay.format("mm");
                _this.time2 = currentTimeDisplay.format("ss");
                if (_this.time1 == "00" && _this.time2 == "00") {
                    _this.finishWorkout();
                }
                else {
                    _this.colonVisible = diff % 1000 > 500;
                    _this.tick();
                }
            }, 53);
        }
    };
    CountDown.prototype.modeForReset = function () {
        return this.modeDisplay;
    };
    CountDown.prototype.time1ForReset = function () {
        return this.time1DuringCountdown();
    };
    CountDown.prototype.time2ForReset = function () {
        return this.time2DuringCountdown();
    };
    return CountDown;
}(__WEBPACK_IMPORTED_MODULE_0__display__["a" /* Display */]));
//# sourceMappingURL=count-down.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountUp; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var CountUp = (function (_super) {
    __extends(CountUp, _super);
    function CountUp(modeDisplay) {
        _super.call(this, modeDisplay);
        this.targetTimeString = "00:10";
        this.running = false;
        this.active = true;
        this.colonVisible = true;
        this.supportsStartStop = true;
    }
    CountUp.prototype.time1DuringCountdown = function () {
        return "00";
    };
    CountUp.prototype.time2DuringCountdown = function () {
        return "00";
    };
    CountUp.prototype.tick = function () {
        var _this = this;
        if (!this.targetTimestamp) {
            var targetTimeDiff = __WEBPACK_IMPORTED_MODULE_1_moment__("2000-01-01T00:" + this.targetTimeString).diff(__WEBPACK_IMPORTED_MODULE_1_moment__("2000-01-01T00:00:00"));
            this.targetTimestamp = __WEBPACK_IMPORTED_MODULE_1_moment__().add(__WEBPACK_IMPORTED_MODULE_1_moment__["duration"](targetTimeDiff).asMilliseconds(), 'milliseconds');
        }
        if (this.running) {
            setTimeout(function () {
                var diff = __WEBPACK_IMPORTED_MODULE_1_moment__().diff(_this.startTime);
                var now = __WEBPACK_IMPORTED_MODULE_1_moment__["utc"](diff);
                _this.time1 = now.format("mm");
                _this.time2 = now.format("ss");
                if (_this.targetTimestamp.diff(__WEBPACK_IMPORTED_MODULE_1_moment__()).valueOf() < 0) {
                    _this.finishWorkout();
                }
                else {
                    _this.colonVisible = diff % 1000 > 500;
                    _this.tick();
                }
            }, 53);
        }
    };
    CountUp.prototype.modeForReset = function () {
        return this.modeDisplay;
    };
    CountUp.prototype.time1ForReset = function () {
        return this.time1DuringCountdown();
    };
    CountUp.prototype.time2ForReset = function () {
        return this.time2DuringCountdown();
    };
    return CountUp;
}(__WEBPACK_IMPORTED_MODULE_0__display__["a" /* Display */]));
//# sourceMappingURL=count-up.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigitsInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DigitsInputComponent = (function () {
    function DigitsInputComponent() {
        this.value = "00:00";
        this.blue = false;
    }
    DigitsInputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], DigitsInputComponent.prototype, "value", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], DigitsInputComponent.prototype, "blue", void 0);
    DigitsInputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-digits-input',
            template: __webpack_require__(582),
            styles: [__webpack_require__(576)]
        }), 
        __metadata('design:paramtypes', [])
    ], DigitsInputComponent);
    return DigitsInputComponent;
}());
//# sourceMappingURL=digits-input.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beeper__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modes__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(beeper) {
        this.beeper = beeper;
        this.menuVisible = false;
        this.closeClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.modeSelectionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.selectMode = function (mode) {
        this.selectedMode = mode;
    };
    MenuComponent.prototype.okClicked = function () {
        this.beeper.buttonBeep();
        if (this.selectMode) {
            this.modeSelectionChanged.emit(this.selectedMode);
        }
        this.menuVisible = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], MenuComponent.prototype, "menuVisible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], MenuComponent.prototype, "closeClicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _b) || Object)
    ], MenuComponent.prototype, "modeSelectionChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__modes__["Mode"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__modes__["Mode"]) === 'function' && _c) || Object)
    ], MenuComponent.prototype, "selectedMode", void 0);
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__(583),
            styles: [__webpack_require__(577)]
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__beeper__["a" /* Beeper */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__beeper__["a" /* Beeper */]) === 'function' && _d) || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beeper__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modes__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModeSelectorComponent = (function () {
    function ModeSelectorComponent(beeper) {
        this.beeper = beeper;
        this.modes = __WEBPACK_IMPORTED_MODULE_2__modes__["a" /* MODES */];
        this.modesMenuVisible = false;
        this.modeSelectionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    ModeSelectorComponent.prototype.ngOnInit = function () {
        this.selectedMode = this.modes[0];
    };
    ModeSelectorComponent.prototype.selectMode = function (mode) {
        this.beeper.buttonBeep();
        this.selectedMode = mode;
        this.modesMenuVisible = false;
        this.modeSelectionChanged.emit(this.selectedMode);
    };
    ModeSelectorComponent.prototype.toggleDropdown = function () {
        this.beeper.buttonBeep();
        this.modesMenuVisible = !this.modesMenuVisible;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], ModeSelectorComponent.prototype, "modeSelectionChanged", void 0);
    ModeSelectorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-mode-selector',
            template: __webpack_require__(584),
            styles: [__webpack_require__(578)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__beeper__["a" /* Beeper */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__beeper__["a" /* Beeper */]) === 'function' && _b) || Object])
    ], ModeSelectorComponent);
    return ModeSelectorComponent;
    var _a, _b;
}());
//# sourceMappingURL=mode-selector.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rounds; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var Rounds = (function (_super) {
    __extends(Rounds, _super);
    function Rounds(modeDisplay) {
        _super.call(this, modeDisplay);
        this.roundDuration = "00:30";
        this.rounds = 8;
        this.currentRound = 1;
        this.running = false;
        this.active = true;
        this.colonVisible = true;
        this.supportsStartStop = true;
    }
    Rounds.prototype.time1DuringCountdown = function () {
        return this.roundDuration.substring(0, 2);
    };
    Rounds.prototype.time2DuringCountdown = function () {
        return this.roundDuration.substring(3);
    };
    Rounds.prototype.tick = function () {
        var _this = this;
        if (!this.targetTimestamp) {
            this.mode = "A" + this.currentRound;
            var startTimeDiff = __WEBPACK_IMPORTED_MODULE_1_moment__("2000-01-01T00:" + this.roundDuration).diff(__WEBPACK_IMPORTED_MODULE_1_moment__("2000-01-01T00:00:00"));
            this.targetTimestamp = __WEBPACK_IMPORTED_MODULE_1_moment__().add(__WEBPACK_IMPORTED_MODULE_1_moment__["duration"](startTimeDiff).asMilliseconds() + 990, 'milliseconds');
        }
        if (this.running) {
            setTimeout(function () {
                var diff = _this.targetTimestamp.diff(__WEBPACK_IMPORTED_MODULE_1_moment__());
                var currentTimeDisplay = __WEBPACK_IMPORTED_MODULE_1_moment__["utc"](__WEBPACK_IMPORTED_MODULE_1_moment__["duration"](diff).asMilliseconds());
                _this.time1 = currentTimeDisplay.format("mm");
                _this.time2 = currentTimeDisplay.format("ss");
                if (_this.time1 == "00" && _this.time2 == "00") {
                    if (_this.currentRound >= _this.rounds) {
                        _this.finishWorkout();
                    }
                    else {
                        _this.beeper.startBeep();
                        _this.currentRound = _this.currentRound + 1;
                        _this.targetTimestamp = undefined;
                        _this.tick();
                    }
                }
                else {
                    _this.colonVisible = diff % 1000 > 500;
                    _this.tick();
                }
            }, 53);
        }
    };
    Rounds.prototype.modeForReset = function () {
        return this.modeDisplay;
    };
    Rounds.prototype.time1ForReset = function () {
        return this.time1DuringCountdown();
    };
    Rounds.prototype.time2ForReset = function () {
        return this.time2DuringCountdown();
    };
    return Rounds;
}(__WEBPACK_IMPORTED_MODULE_0__display__["a" /* Display */]));
//# sourceMappingURL=rounds.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stopwatch; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var Stopwatch = (function (_super) {
    __extends(Stopwatch, _super);
    function Stopwatch(modeDisplay) {
        _super.call(this, modeDisplay);
        this.running = false;
        this.active = true;
        this.colonVisible = true;
        this.supportsStartStop = true;
        this.countdownDurationSeconds = 0;
    }
    Stopwatch.prototype.time1DuringCountdown = function () {
        return "00";
    };
    Stopwatch.prototype.time2DuringCountdown = function () {
        return "00";
    };
    Stopwatch.prototype.tick = function () {
        var _this = this;
        if (this.running) {
            setTimeout(function () {
                var diff = __WEBPACK_IMPORTED_MODULE_1_moment__().diff(_this.startTime);
                var now = __WEBPACK_IMPORTED_MODULE_1_moment__["utc"](diff);
                _this.mode = now.format("mm");
                _this.time1 = now.format("ss");
                _this.time2 = now.format("SS");
                _this.colonVisible = diff % 1000 > 500;
                _this.tick();
            }, 53);
        }
    };
    Stopwatch.prototype.modeForReset = function () {
        return this.modeDisplay;
    };
    Stopwatch.prototype.time1ForReset = function () {
        return this.time1DuringCountdown();
    };
    Stopwatch.prototype.time2ForReset = function () {
        return this.time2DuringCountdown();
    };
    return Stopwatch;
}(__WEBPACK_IMPORTED_MODULE_0__display__["a" /* Display */]));
//# sourceMappingURL=stopwatch.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabata; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var WORK = "F";
var BREAK = "L";
var Tabata = (function (_super) {
    __extends(Tabata, _super);
    function Tabata(modeDisplay) {
        _super.call(this, modeDisplay);
        this.workDuration = "00:20";
        this.breakDuration = "00:10";
        this.rounds = 8;
        this.currentRound = 1;
        this.currentMode = WORK;
        this.running = false;
        this.active = true;
        this.colonVisible = true;
        this.supportsStartStop = true;
    }
    Tabata.prototype.time1DuringCountdown = function () {
        return this.workDuration.substring(0, 2);
    };
    Tabata.prototype.time2DuringCountdown = function () {
        return this.workDuration.substring(3);
    };
    Tabata.prototype.tick = function () {
        var _this = this;
        if (!this.targetTimestamp) {
            this.mode = this.currentMode + this.currentRound;
            var startTimeDiff = void 0;
            if (this.currentMode === WORK) {
                startTimeDiff = __WEBPACK_IMPORTED_MODULE_1_moment__("2000-01-01T00:" + this.workDuration).diff(__WEBPACK_IMPORTED_MODULE_1_moment__("2000-01-01T00:00:00"));
            }
            else {
                startTimeDiff = __WEBPACK_IMPORTED_MODULE_1_moment__("2000-01-01T00:" + this.breakDuration).diff(__WEBPACK_IMPORTED_MODULE_1_moment__("2000-01-01T00:00:00"));
            }
            this.targetTimestamp = __WEBPACK_IMPORTED_MODULE_1_moment__().add(__WEBPACK_IMPORTED_MODULE_1_moment__["duration"](startTimeDiff).asMilliseconds() + 990, 'milliseconds');
        }
        if (this.running) {
            setTimeout(function () {
                var diff = _this.targetTimestamp.diff(__WEBPACK_IMPORTED_MODULE_1_moment__());
                var currentTimeDisplay = __WEBPACK_IMPORTED_MODULE_1_moment__["utc"](__WEBPACK_IMPORTED_MODULE_1_moment__["duration"](diff).asMilliseconds());
                _this.time1 = currentTimeDisplay.format("mm");
                var seconds = currentTimeDisplay.format("ss");
                if (_this.time2 !== seconds) {
                    _this.time2 = seconds;
                    if (_this.currentMode === BREAK && diff.valueOf() <= 4100 && diff.valueOf() > 1100) {
                    }
                }
                if (_this.time1 == "00" && _this.time2 == "00") {
                    if (_this.currentMode == BREAK && _this.currentRound >= _this.rounds) {
                        _this.finishWorkout();
                    }
                    else {
                        if (_this.currentMode === WORK) {
                            _this.beeper.finishBeep();
                            _this.currentMode = BREAK;
                        }
                        else {
                            _this.beeper.startBeep();
                            _this.currentMode = WORK;
                            _this.currentRound = _this.currentRound + 1;
                        }
                        _this.targetTimestamp = undefined;
                        _this.tick();
                    }
                }
                else {
                    _this.colonVisible = diff % 1000 > 500;
                    _this.tick();
                }
            }, 53);
        }
    };
    Tabata.prototype.modeForReset = function () {
        return this.modeDisplay;
    };
    Tabata.prototype.time1ForReset = function () {
        return this.time1DuringCountdown();
    };
    Tabata.prototype.time2ForReset = function () {
        return this.time2DuringCountdown();
    };
    return Tabata;
}(__WEBPACK_IMPORTED_MODULE_0__display__["a" /* Display */]));
//# sourceMappingURL=tabata.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beeper__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Display; });


var BEEPER = new __WEBPACK_IMPORTED_MODULE_1__beeper__["a" /* Beeper */]();
var Display = (function () {
    function Display(modeDisplay) {
        this.beeper = BEEPER;
        this.countdownDurationSeconds = 10;
        this.pristine = true;
        this.countingDown = false;
        this.modeDisplay = modeDisplay;
    }
    Display.prototype.start = function () {
        this.reset();
        this.pristine = false;
        if (!this.countingDown && !this.running) {
            if (this.supportsStartStop) {
                this.countdownTargetTime = __WEBPACK_IMPORTED_MODULE_0_moment__().add(this.countdownDurationSeconds, 'seconds');
                this.countingDown = true;
                this.running = false;
                this.tickCountdown();
            }
            else {
                this.startWorkout();
            }
        }
    };
    Display.prototype.tickCountdown = function () {
        var _this = this;
        this.time1 = this.time1DuringCountdown();
        this.time2 = this.time2DuringCountdown();
        if (this.countingDown) {
            setTimeout(function () {
                _this.active = true;
                var diff = _this.countdownTargetTime.diff(__WEBPACK_IMPORTED_MODULE_0_moment__());
                if (diff.valueOf() < 0) {
                    _this.beeper.startBeep();
                    _this.mode = _this.modeDisplay;
                    _this.startWorkout();
                }
                else {
                    var nextMode = __WEBPACK_IMPORTED_MODULE_0_moment__["utc"](__WEBPACK_IMPORTED_MODULE_0_moment__["duration"](diff).asMilliseconds() + 990).format("ss");
                    if (nextMode !== _this.mode) {
                        _this.mode = nextMode;
                        if (diff.valueOf() <= 3100 && diff.valueOf() > 0) {
                            _this.beeper.countdownBeep();
                        }
                    }
                    _this.tickCountdown();
                }
            }, 50);
        }
    };
    Display.prototype.startWorkout = function () {
        if (!this.running) {
            this.startTime = __WEBPACK_IMPORTED_MODULE_0_moment__();
            this.running = true;
            this.countingDown = false;
            this.tick();
        }
    };
    Display.prototype.finishWorkout = function () {
        this.running = false;
        this.countingDown = false;
        this.colonVisible = true;
        this.beeper.finishBeep();
    };
    Display.prototype.stop = function () {
        if (this.running || this.countingDown) {
            this.running = false;
            this.countingDown = false;
            this.colonVisible = false;
        }
    };
    Display.prototype.leftPad = function (string) {
        var str = "" + string;
        var pad = "00";
        return pad.substring(0, pad.length - str.length) + str;
    };
    Display.prototype.reset = function () {
        this.mode = this.modeForReset();
        this.time1 = this.time1ForReset();
        this.time2 = this.time2ForReset();
        this.pristine = true;
        this.colonVisible = true;
    };
    return Display;
}());
//# sourceMappingURL=display.js.map

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, ".hide-colon {\n  color: black;\n  text-shadow: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, ".repetition,\n.repetition input {\n  font-size: 5vh;\n}\n\ninput {\n  color: #ef2713;\n  text-shadow: 0 0 5px #ff887e;\n  background-color: rgba(0,0,0,0.1);\n  padding: 1vh;\n  border: 1px none white;\n  border-bottom-style: solid;\n  font-family: '7segment', monospace;\n}\n\ninput.blue {\n  color: #6ba1ff;\n  text-shadow: 0 0 5px #a49cff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 3vh;\n  color: rgba(128, 128, 128, 0.51);\n  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.54);\n  text-transform: uppercase;\n}\n\n.menu-close-button {\n  font-size: 6vh;\n  float: right;\n  cursor: pointer;\n}\n\n.menu-close-button:hover {\n  color: #d1d1d1;\n}\n\n.mode-specific-settings-panel {\n  display: block;\n}\n\n.ok-button {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin: 0;\n  font-size: 4vh;\n  padding: 1vh;\n  color: #505050;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #505050;\n}\n\n.ok-button:hover {\n  color: #d7d8e4;\n  border-color: #dadada;\n  border-bottom-color: black;\n  border-right-color: black;\n  border-left-color: #ababab;\n  cursor: pointer;\n  background-image: -webkit-linear-gradient(bottom, #201e21 40%, #383838 100%);\n  background-image: linear-gradient(to top, #201e21 40%, #383838 100%);\n}\n\n.ok-button {\n  position: fixed;\n  border-radius: 4vh;\n  min-width: 8em;\n  bottom: 5vh;\n  right: 5vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "\n\n.selected-mode {\n  cursor: pointer;\n  display: inline-block;\n  color: #6ba1ff;\n  text-shadow: 0 0 5px #a49cff;\n  font-size: 5vh;\n  background-color: rgba(0, 0, 0, 0.1);\n  padding: 1vh;\n  font-family: '7segment', monospace;\n}\n.selected-mode-label {\n  cursor: pointer;\n  color: rgba(107, 161, 255, 0.57);\n  font-size: 6vh;\n  padding: 1vh;\n}\n\n.menu-container {\n  display: block;\n}\n\n\n.modes {\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 30%;\n  min-width: 20em;\n  margin-right: 5vw;\n}\n\n.modes button {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin: 0;\n  font-size: 4vh;\n  padding: 1vh;\n  color: #505050;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #505050;\n}\n\n.modes button:first-child {\n  border-top-right-radius: 2vh;\n}\n\n.modes button:last-child {\n  border-bottom-left-radius: 2vh;\n  border-bottom-right-radius: 2vh;\n}\n\n.modes button:hover {\n  color: #d7d8e4;\n  border-color: #dadada;\n  border-bottom-color: black;\n  border-right-color: black;\n  border-left-color: #ababab;\n  cursor: pointer;\n  background-image: -webkit-linear-gradient(bottom, #201e21 40%, #383838 100%);\n  background-image: linear-gradient(to top, #201e21 40%, #383838 100%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 288,
	"./af.js": 288,
	"./ar": 294,
	"./ar-dz": 289,
	"./ar-dz.js": 289,
	"./ar-ly": 290,
	"./ar-ly.js": 290,
	"./ar-ma": 291,
	"./ar-ma.js": 291,
	"./ar-sa": 292,
	"./ar-sa.js": 292,
	"./ar-tn": 293,
	"./ar-tn.js": 293,
	"./ar.js": 294,
	"./az": 295,
	"./az.js": 295,
	"./be": 296,
	"./be.js": 296,
	"./bg": 297,
	"./bg.js": 297,
	"./bn": 298,
	"./bn.js": 298,
	"./bo": 299,
	"./bo.js": 299,
	"./br": 300,
	"./br.js": 300,
	"./bs": 301,
	"./bs.js": 301,
	"./ca": 302,
	"./ca.js": 302,
	"./cs": 303,
	"./cs.js": 303,
	"./cv": 304,
	"./cv.js": 304,
	"./cy": 305,
	"./cy.js": 305,
	"./da": 306,
	"./da.js": 306,
	"./de": 308,
	"./de-at": 307,
	"./de-at.js": 307,
	"./de.js": 308,
	"./dv": 309,
	"./dv.js": 309,
	"./el": 310,
	"./el.js": 310,
	"./en-au": 311,
	"./en-au.js": 311,
	"./en-ca": 312,
	"./en-ca.js": 312,
	"./en-gb": 313,
	"./en-gb.js": 313,
	"./en-ie": 314,
	"./en-ie.js": 314,
	"./en-nz": 315,
	"./en-nz.js": 315,
	"./eo": 316,
	"./eo.js": 316,
	"./es": 318,
	"./es-do": 317,
	"./es-do.js": 317,
	"./es.js": 318,
	"./et": 319,
	"./et.js": 319,
	"./eu": 320,
	"./eu.js": 320,
	"./fa": 321,
	"./fa.js": 321,
	"./fi": 322,
	"./fi.js": 322,
	"./fo": 323,
	"./fo.js": 323,
	"./fr": 326,
	"./fr-ca": 324,
	"./fr-ca.js": 324,
	"./fr-ch": 325,
	"./fr-ch.js": 325,
	"./fr.js": 326,
	"./fy": 327,
	"./fy.js": 327,
	"./gd": 328,
	"./gd.js": 328,
	"./gl": 329,
	"./gl.js": 329,
	"./he": 330,
	"./he.js": 330,
	"./hi": 331,
	"./hi.js": 331,
	"./hr": 332,
	"./hr.js": 332,
	"./hu": 333,
	"./hu.js": 333,
	"./hy-am": 334,
	"./hy-am.js": 334,
	"./id": 335,
	"./id.js": 335,
	"./is": 336,
	"./is.js": 336,
	"./it": 337,
	"./it.js": 337,
	"./ja": 338,
	"./ja.js": 338,
	"./jv": 339,
	"./jv.js": 339,
	"./ka": 340,
	"./ka.js": 340,
	"./kk": 341,
	"./kk.js": 341,
	"./km": 342,
	"./km.js": 342,
	"./ko": 343,
	"./ko.js": 343,
	"./ky": 344,
	"./ky.js": 344,
	"./lb": 345,
	"./lb.js": 345,
	"./lo": 346,
	"./lo.js": 346,
	"./lt": 347,
	"./lt.js": 347,
	"./lv": 348,
	"./lv.js": 348,
	"./me": 349,
	"./me.js": 349,
	"./mi": 350,
	"./mi.js": 350,
	"./mk": 351,
	"./mk.js": 351,
	"./ml": 352,
	"./ml.js": 352,
	"./mr": 353,
	"./mr.js": 353,
	"./ms": 355,
	"./ms-my": 354,
	"./ms-my.js": 354,
	"./ms.js": 355,
	"./my": 356,
	"./my.js": 356,
	"./nb": 357,
	"./nb.js": 357,
	"./ne": 358,
	"./ne.js": 358,
	"./nl": 360,
	"./nl-be": 359,
	"./nl-be.js": 359,
	"./nl.js": 360,
	"./nn": 361,
	"./nn.js": 361,
	"./pa-in": 362,
	"./pa-in.js": 362,
	"./pl": 363,
	"./pl.js": 363,
	"./pt": 365,
	"./pt-br": 364,
	"./pt-br.js": 364,
	"./pt.js": 365,
	"./ro": 366,
	"./ro.js": 366,
	"./ru": 367,
	"./ru.js": 367,
	"./se": 368,
	"./se.js": 368,
	"./si": 369,
	"./si.js": 369,
	"./sk": 370,
	"./sk.js": 370,
	"./sl": 371,
	"./sl.js": 371,
	"./sq": 372,
	"./sq.js": 372,
	"./sr": 374,
	"./sr-cyrl": 373,
	"./sr-cyrl.js": 373,
	"./sr.js": 374,
	"./ss": 375,
	"./ss.js": 375,
	"./sv": 376,
	"./sv.js": 376,
	"./sw": 377,
	"./sw.js": 377,
	"./ta": 378,
	"./ta.js": 378,
	"./te": 379,
	"./te.js": 379,
	"./tet": 380,
	"./tet.js": 380,
	"./th": 381,
	"./th.js": 381,
	"./tl-ph": 382,
	"./tl-ph.js": 382,
	"./tlh": 383,
	"./tlh.js": 383,
	"./tr": 384,
	"./tr.js": 384,
	"./tzl": 385,
	"./tzl.js": 385,
	"./tzm": 387,
	"./tzm-latn": 386,
	"./tzm-latn.js": 386,
	"./tzm.js": 387,
	"./uk": 388,
	"./uk.js": 388,
	"./uz": 389,
	"./uz.js": 389,
	"./vi": 390,
	"./vi.js": 390,
	"./x-pseudo": 391,
	"./x-pseudo.js": 391,
	"./yo": 392,
	"./yo.js": 392,
	"./zh-cn": 393,
	"./zh-cn.js": 393,
	"./zh-hk": 394,
	"./zh-hk.js": 394,
	"./zh-tw": 395,
	"./zh-tw.js": 395
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 579;


/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<app-menu [menuVisible]=\"menuVisible\"\n          [selectedMode]=\"selectedMode\"\n          (closeClicked)=\"menuVisible=false;\"\n          (modeSelectionChanged)=\"setMode($event);\"></app-menu>\n\n<div id=\"container\" class=\"container\">\n\n  <div class=\"flex-container-off\">\n    <div class=\"clock-off\">\n      <div class=\"led led-mode led-off\">88</div>\n      <div class=\"led led-time led-off\">88:88</div>\n    </div>\n  </div>\n\n  <div class=\"flex-container\">\n    <div class=\"clock\">\n      <div class=\"led led-mode\" [ngClass]=\"{'led-off':!display.active}\">{{display.mode}}</div>\n      <div class=\"led led-time\" [ngClass]=\"{'led-off':!display.active}\">{{display.time1}}<span class=\"colon\" [ngClass]=\"{'led-off':!display.colonVisible || !display.active}\">:</span>{{display.time2}}</div>\n    </div>\n  </div>\n\n  <div class=\"controls\">\n    <button (click)=\"toggleFullScreen();\"><span class=\"fa\" [ngClass]=\"{'fa-expand': !fullScreenActive, 'fa-compress': fullScreenActive}\"></span></button>\n    <button (click)=\"toggleRunning()\" *ngIf=\"!fullScreenActive && display.supportsStartStop\">\n      <span class=\"fa\" [ngClass]=\"{\n                                    'fa-play': display.pristine,\n                                    'fa-pause': (display.running || display.countingDown),\n                                    'fa-undo': !display.pristine && !(display.running || display.countingDown)\n                                  }\"></span>\n    </button>\n    <button (click)=\"toggleMenu()\" *ngIf=\"!fullScreenActive\">MODE</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

module.exports = "<div class=\"repetition\">\n  <input type=\"text\" [value]=\"value\" size=\"5\" [ngClass]=\"{'blue': blue}\">\n</div>\n"

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

module.exports = "<div id=\"menu\" [ngClass]=\"{'active': menuVisible}\">\n  <span class=\"fa fa-times menu-close-button\" (click)=\"closeClicked.emit()\"></span>\n\n  <h1>Mode</h1>\n  <app-mode-selector (modeSelectionChanged)=\"selectMode($event)\"></app-mode-selector>\n\n  <div class=\"mode-specific-settings-panel\" *ngIf=\"selectedMode.label !== 'Clock'\">\n    <h1>Start Countdown (Seconds)</h1>\n    <app-digits-input [value]=\"selectedMode.label !== 'Stopwatch' ? '10' : '0'\" [blue]=\"true\"></app-digits-input>\n  </div>\n\n  <div class=\"mode-specific-settings-panel\" *ngIf=\"selectedMode.label === 'Count Up'\">\n    <h1>Goal</h1>\n    <app-digits-input [value]=\"'12:00'\"></app-digits-input>\n  </div>\n\n  <div class=\"mode-specific-settings-panel\" *ngIf=\"selectedMode.label === 'Count Down'\">\n    <h1>Start</h1>\n    <app-digits-input [value]=\"'12:00'\"></app-digits-input>\n  </div>\n\n  <div class=\"mode-specific-settings-panel\" *ngIf=\"selectedMode.label === 'Tabata'\">\n    <h1>Work</h1>\n    <app-digits-input [value]=\"'00:20'\"></app-digits-input>\n    <h1>Break</h1>\n    <app-digits-input [value]=\"'00:10'\"></app-digits-input>\n    <h1>Number of Rounds</h1>\n    <app-digits-input [value]=\"'8'\"></app-digits-input>\n  </div>\n\n  <div class=\"mode-specific-settings-panel\" *ngIf=\"selectedMode.label === 'Rounds'\">\n    <h1>Round</h1>\n    <app-digits-input [value]=\"'00:30'\"></app-digits-input>\n    <h1>Number of Rounds</h1>\n    <app-digits-input [value]=\"'8'\"></app-digits-input>\n  </div>\n\n  <button class=\"ok-button\" (click)=\"okClicked()\">OK</button>\n\n</div>\n"

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = "<div (click)=\"toggleDropdown();\">\n  <span class=\"selected-mode\">\n    {{selectedMode.display}}\n  </span>\n  <span class=\"selected-mode-label\">\n    {{selectedMode.label}}\n  </span>\n</div>\n\n<div class=\"menu-container\">\n  <div class=\"modes\" *ngIf=\"modesMenuVisible\">\n    <button *ngFor=\"let mode of modes\" (click)=\"selectMode(mode);\">{{mode.label}}</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(402);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Beeper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Beeper = (function () {
    function Beeper() {
        var w = window;
        this.synth = new (w.AudioContext || w.webkitAudioContext)();
    }
    Beeper.prototype.buttonBeep = function () {
        this.beep(80, 1500, 0.2);
    };
    Beeper.prototype.countdownBeep = function () {
        this.beep(300, 440, 0.8);
    };
    Beeper.prototype.startBeep = function () {
        this.beep(600, 880, 0.8);
    };
    Beeper.prototype.finishBeep = function () {
        this.beep(1200, 660, 0.8);
    };
    Beeper.prototype.beep = function (duration, freqency, volume) {
        var _this = this;
        var _beep = (function () {
            return function (duration, freqency, volume) {
                var oscillator = _this.synth.createOscillator();
                var node = _this.synth.createGain();
                oscillator.connect(node);
                node.connect(_this.synth.destination);
                oscillator.type = 'square';
                oscillator.frequency.value = freqency;
                node.gain.value = volume / 20;
                oscillator.start();
                setTimeout(function () {
                    oscillator.stop();
                }, duration);
            };
        })();
        _beep(duration, freqency, volume);
    };
    Beeper = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], Beeper);
    return Beeper;
}());
//# sourceMappingURL=beeper.js.map

/***/ })

},[599]);
//# sourceMappingURL=main.bundle.js.map