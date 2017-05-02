angular.module('main.controller',[])
    .controller('mainCtrl', function($scope, mainSvc){
        $scope.$on("$ionicView.enter", function(data){
           console.log("$stateChangeSuccess-------");
            $scope.mainSvcData = mainSvc.getSvcData();
            mainSvc.getNewProdList();
            mainSvc.getHotProdList();
        });
        $scope.testNum = 0;
        $scope.test = function(){
            mainSvc.getTestProdList();
            $scope.testNum += $scope.mainSvcData.testProdList.length;


        };

        $scope.testProdList = [
            {
                prod_id:0,
                prod_name:"香菇a",
                main_img_src:"test_pic_sm.png"
            },
            {
                prod_id:1,
                prod_name:"桑葚b",
                main_img_src:"test_pic_sm.png"
            },
            {
                prod_id:1,
                prod_name:"桑葚c",
                main_img_src:"test_pic_sm.png"
            },
            {
                prod_id:1,
                prod_name:"桑葚d",
                main_img_src:"test_pic_sm.png"
            },
            {
                prod_id:1,
                prod_name:"桑葚e",
                main_img_src:"test_pic_sm.png"
            }
        ];
    });