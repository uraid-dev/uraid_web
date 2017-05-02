angular.module("rdgsApp", ['ngRoute'
    ,'DataRequest.service'
    ,'main.controller','main.service'
    ,'productInfo.controller','productInfo.service'])
.run(function(){

})
.config( function($routeProvider){
    $routeProvider
        .when('/main',{templateUrl:'page/main.html', controller:'mainCtrl'})
        .when('/prodinfo/:prodId',{templateUrl:'page/productInfo.html', controller:'productInfoCtrl'})
        .otherwise({redirectTo:'/main'});



});