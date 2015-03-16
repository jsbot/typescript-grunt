/// <reference path="main-page-module.ts" />
/// <reference path="../../vendor/angular-local-storage.d.ts" />

interface iTodoItem{
    [index: string]: string;
}

class localStorageHandler{
    public static $inject = [
        'localStorageService'
    ]
    constructor(private local: angular.local.storage.ILocalStorageService<iTodoItem[]>){

    }
    setItem(data: iTodoItem[]){
        this.local.set('test',data);
    }
}


class mainPageController {
       public static $inject = [
           '$scope',
            'localStorageHandler'
       ];
       constructor(private $scope:ng.IScope, private localStorageHandler) {
            console.log('main controller');
            localStorageHandler.setItem('blassimo');
        }

    }


