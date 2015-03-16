/// <reference path="angular.d.ts"/>
/// <reference path="angular-ui-router.d.ts"/>
/// <reference path="restangular.d.ts"/>
/// <reference path="components/nav/navigation.ts"/>

declare module app{}
var app = angular.module("app", ['ui.router','restangular', 'mainPage', 'horisontalPage', 'verticalPage', 'LocalStorageModule'])
    .config(($stateProvider: ng.ui.IStateProvider, RestangularProvider: restangular.IProvider, localStorageServiceProvider: angular.local.storage.ILocalStorageServiceProvider) => {
        RestangularProvider.setBaseUrl('mock-data/');
        localStorageServiceProvider.setStorageType('localStorage');
    })
    .run(()=>{})
    .directive('cstmNavigation', navigation)
