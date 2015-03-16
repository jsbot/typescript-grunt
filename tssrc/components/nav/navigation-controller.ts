/// <reference path="../../vendor/angular.d.ts"/>

interface INavScope extends ng.IScope{
    menu : any[]
}
class navigationController{
    constructor ($scope: INavScope)  {
        $scope.menu = ['menu Item One', 'menu Item Two', 'menu Item Three'];
    }
}