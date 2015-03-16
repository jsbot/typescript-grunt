/// <reference path="vertical-page-module.ts" />
/// <reference path="../../restangular.d.ts" />


interface ITweetScope extends ng.IScope{
    data : any[]
}

class verticalPageService {
    public static $inject = ['Restangular'];
    constructor(
        private Restangular: restangular.IService
    ){}

    getTweets (): restangular.IPromise<any> {
        return this.Restangular.one('tweets','response.json').get();
    }

}

class verticalPageController{
    public static $inject = [
        '$scope',
        'verticalPageService'
    ];
    constructor(
        private $scope: ITweetScope,
        private verticalPageService
    ){
        var response = verticalPageService.getTweets();
        response.then((data) => {
            $scope.data = data.statuses;
        })
    }
}


