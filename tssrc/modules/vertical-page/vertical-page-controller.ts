/// <reference path="vertical-page-module.ts" />
/// <reference path="vertical-page-service.ts" />

interface ITweetScope extends ng.IScope{
    data : any[]
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


