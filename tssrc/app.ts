/// <reference path="vendor/angular.d.ts"/>
/// <reference path="vendor/angular-ui-router.d.ts"/>
/// <reference path="vendor/restangular.d.ts"/>
/// <reference path="components/nav/navigation.ts"/>

declare module app{}
var app = angular.module("app", ['ui.router','restangular', 'mainPage', 'horisontalPage', 'verticalPage', 'LocalStorageModule'])
    .config(($stateProvider: ng.ui.IStateProvider, RestangularProvider: restangular.IProvider, localStorageServiceProvider: angular.local.storage.ILocalStorageServiceProvider) => {
        RestangularProvider.setBaseUrl('mock-data/');
        localStorageServiceProvider.setStorageType('localStorage');
    })
    .run(()=>{})
    .directive('cstmNavigation', navigation)
