angular.module("rdgsWebApp", ['ionic'
    ,'DataRequest.service'
    ,'main.controller','main.service'
    ,'productInfo.controller','productInfo.service'])
.run(function(){
    console.log("starter started.")
})
    .config( function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('main',{url:'/main', templateUrl:'page/main.html', controller:'mainCtrl'})
            .state('prodInfo',{url:'/prodinfo/:prodId', templateUrl:'page/productInfo.html', controller:'productInfoCtrl'});
        $urlRouterProvider.otherwise('/main');
    });