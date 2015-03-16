/// <reference path="../../vendor/angular.d.ts"/>
/// <reference path="main-page-controller.ts"/>

module mainPage{
    angular.module('mainPage',[])

    .config(($stateProvider:ng.ui.IStateProvider) => {

            $stateProvider.state('main', {
                url: '/',
                resolve: {},
                views: {
                    'main': {
                        templateUrl: './modules/main-page/main-page.html',
                        controller: 'mainPageController',
                        controllerAs: 'mainPageController'
                    }
                }
            })
        })
        .service("localStorageHandler",localStorageHandler)
        .controller("mainPageController",mainPageController)

}




