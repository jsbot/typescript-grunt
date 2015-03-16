/// <reference path="../../vendor/angular.d.ts"/>
/// <reference path="../../app.ts"/>
/// <reference path="navigation-controller.ts"/>



function navigation(): ng.IDirective{
    return {
        restrict :'AE' ,
        /*scope :{

         },*/
        templateUrl :'./components/nav/nav.html' ,
        controller : navigationController
    }
}

