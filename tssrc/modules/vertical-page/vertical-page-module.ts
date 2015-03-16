/// <reference path="vertical-page-controller.ts" />

module verticalPage{
    angular.module('verticalPage',[])
    .config(function ($stateProvider , $urlRouterProvider ) {

        $stateProvider.state('vertical' , {
            url :'/vertical' ,
            resolve :{

            } ,
            views :{
                'main' :{
                    templateUrl :'./modules/vertical-page/vertical-page.html' ,
                    controller :'verticalPageController' ,
                    controllerAs :'verticalPageController'
                }
            }
        })
            .state('vertical.nested' , {
                url :'/nested' ,
                resolve :{

                } ,
                views :{
                    'top' :{
                        templateUrl :'./modules/vertical-page/top-page.html'
                        /*controller :'topPageController' ,
                         controllerAs :'topPageController'*/
                    },
                    'bottom' :{
                        templateUrl :'./modules/vertical-page/bottom-page.html'
                        /*controller :'bottomPageController' ,
                         controllerAs :'bottomPageController'*/
                    }
                }
            })

    })
        .service("verticalPageService",verticalPageService)
    .controller("verticalPageController",verticalPageController)

}




