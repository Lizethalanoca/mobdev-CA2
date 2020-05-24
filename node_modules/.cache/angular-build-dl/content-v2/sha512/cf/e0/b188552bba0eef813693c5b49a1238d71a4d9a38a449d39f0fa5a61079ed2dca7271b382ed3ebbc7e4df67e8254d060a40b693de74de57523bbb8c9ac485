(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-details-characters-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters-details/characters-details.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters-details/characters-details.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"success\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/characters\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title> {{ character?.name }}</ion-title>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"unfavouriteCharacter()\" *ngIf=\"isFavourite\">\n\t\t\t\t<ion-icon name=\"thumbs-up\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"favouriteCharacter()\" *ngIf=\"!isFavourite\">\n\t\t\t\t<ion-icon name=\"thumbs-up-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card class=\"movie-card\" *ngIf=\"character\">\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<img [src]=\"character.img\" >\n            </ion-item>\n\n\t\t\t<!-- show all the character info by icon followed by text -->\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"success\" name=\"key-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tID : {{ character.char_id }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"success\" name=\"gift-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tBirthday : {{ character.birthday }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"success\" name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tOccupation : {{ character.occupation }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"success\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tStatus : {{ character.status }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"success\" name=\"at-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tNickname : {{ character.nickname }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"success\" name=\"eye-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tAppearance : {{ character.appearance }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"success\" name=\"videocam-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tPortrayed : {{ character.portrayed }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"success\" name=\"film-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tCategory : {{ character.category }}\n\t\t\t</ion-item>\n\n\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/characters-details/characters-details-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/characters-details/characters-details-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CharactersDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersDetailsPageRoutingModule", function() { return CharactersDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _characters_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters-details.page */ "./src/app/pages/characters-details/characters-details.page.ts");




const routes = [
    {
        path: '',
        component: _characters_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }
];
let CharactersDetailsPageRoutingModule = class CharactersDetailsPageRoutingModule {
};
CharactersDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharactersDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/characters-details/characters-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/characters-details/characters-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: CharactersDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersDetailsPageModule", function() { return CharactersDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _characters_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters-details-routing.module */ "./src/app/pages/characters-details/characters-details-routing.module.ts");
/* harmony import */ var _characters_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters-details.page */ "./src/app/pages/characters-details/characters-details.page.ts");







let CharactersDetailsPageModule = class CharactersDetailsPageModule {
};
CharactersDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _characters_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersDetailsPageRoutingModule"]
        ],
        declarations: [_characters_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })
], CharactersDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/characters-details/characters-details.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/characters-details/characters-details.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3RlcnMtZGV0YWlscy9jaGFyYWN0ZXJzLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/characters-details/characters-details.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/characters-details/characters-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: CharacterDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function() { return CharacterDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let CharacterDetailsPage = class CharacterDetailsPage {
    constructor(activatedRoute, api, http, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.http = http;
        this.favouriteService = favouriteService;
        this.characterId = null;
        this.isFavourite = false;
    }
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.character.character_id)); //Json to get the character info by ID
        });
        this.favouriteService.isFavourite(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }
    //favourite / unfavourite for each character
    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }
    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavourite = false;
        });
    }
};
CharacterDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"] },
    { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"] }
];
CharacterDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-characters-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./characters-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters-details/characters-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./characters-details.page.scss */ "./src/app/pages/characters-details/characters-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]])
], CharacterDetailsPage);



/***/ }),

/***/ "./src/app/services/favourite.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/favourite.service.ts ***!
  \***********************************************/
/*! exports provided: FavouriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteService", function() { return FavouriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const STORAGE_KEY = 'favouriteEpisodes'; //first storage key for Episodes
const STORAGE_KEY1 = 'favouriteCharacters'; //second storage key for characters
let FavouriteService = class FavouriteService {
    constructor(storage) {
        this.storage = storage;
    }
    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEY);
    }
    //episodes favourite functions
    isFavourite(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }
    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEY, result);
            }
            else {
                return this.storage.set(STORAGE_KEY, [episodeId]);
            }
        });
    }
    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }
    //characters favourite functions
    getAllFavouriteCharacters() {
        return this.storage.get(STORAGE_KEY1);
    }
    isFavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }
    favouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                result.push(characterId);
                return this.storage.set(STORAGE_KEY1, result);
            }
            else {
                return this.storage.set(STORAGE_KEY1, [characterId]);
            }
        });
    }
    unfavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }
};
FavouriteService.ctorParameters = () => [
    { type: Storage }
];
FavouriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Storage])
], FavouriteService);



/***/ })

}]);
//# sourceMappingURL=characters-details-characters-details-module-es2015.js.map