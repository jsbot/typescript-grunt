/// <reference path="horisontal-page-controller.ts" />

module horisontalPage {
    angular.module('horisontalPage', [])
        .config(($stateProvider:ng.ui.IStateProvider) => {

            $stateProvider.state('horisontal', {
                url: '/horisontal',
                resolve: {},
                views: {
                    'main': {
                        templateUrl: './modules/horisontal-page/horisontal-page.html',
                        controller: 'horisontalPageController',
                        controllerAs: 'horisontalPageController'
                    }
                }
            })
        })
        .controller("horisontalPageController",horisontalPageController);
}


