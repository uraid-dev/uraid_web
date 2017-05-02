angular.module("productInfo.controller", [])
.controller("productInfoCtrl", function($scope,$stateParams,productInfoSvc){
    $scope.curTab = 0;
    $scope.$on("$ionicView.enter", function(data){
        console.log("enter ProductInfo"+$stateParams.prodId);
        $scope.productInfoData = productInfoSvc.initSvcData();
        productInfoSvc.getProdMainInfo($stateParams.prodId);
    });

    $scope.selectTab = function(tabIdx){
        $("#divProdinfoTabs a").eq($scope.curTab).removeClass("cur-activated");
        $("#divProdinfoTabs a").eq(tabIdx).addClass("cur-activated");
        $scope.curTab = tabIdx;
      switch(tabIdx){

      }
    };

});