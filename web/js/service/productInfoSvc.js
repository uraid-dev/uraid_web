angular.module("productInfo.service", [])
.service("productInfoSvc", ["$ionicLoading","DataRequestSvc", function($ionicLoading, DataRequestSvc){
    var productInfoSvcData = {};

    return {
        initSvcData: function(){
            productInfoSvcData = {};
            return productInfoSvcData;
        },
        getSvcData:function(){
            return productInfoSvcData;
        },
        getProdMainInfo: function(prodId){
            $ionicLoading.show({
                template:"LOADING..."
            });
            DataRequestSvc.postData("/getProdInfo/"+prodId, {}, true).then(
                function(resp){
                    $ionicLoading.hide();
                    productInfoSvcData.productMainInfo = resp.data;
                    console.log("getProdInfo returns: "+angular.toJson(resp.data));
                },
                function(err){
                    $ionicLoading.hide();
                });
            /*productInfoSvcData.productMainInfo = {
                prod_id:prodId,
                prod_name:"12313123d打发["+prodId+"]"
            };*/
        }
    };
}]);