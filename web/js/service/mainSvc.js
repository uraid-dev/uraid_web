angular.module('main.service',[])
    .service('mainSvc', [ '$ionicLoading', 'DataRequestSvc', function($ionicLoading, DataRequestSvc){
        var mainSvcData = {testProdList:[]};

        return {
            initSvcData: function(){
                mainSvcData = {testProdList:[]};
                return mainSvcData;
            },
            getSvcData:function(){
                return mainSvcData;
            },
            getTestProdList:function(){
                mainSvcData.testProdList = mainSvcData.testProdList.concat([
                    {prod_id:1, prod_name:"香菇", prod_pic:"http://img.blog.csdn.net/20151123175936770", prod_area:"武汉"},
                    {prod_id:2, prod_name:"桑葚", prod_pic:"http://img.blog.csdn.net/20151123175936770", prod_area:"武汉"},
                    {prod_id:3, prod_name:"水牛", prod_pic:"http://img.blog.csdn.net/20151123175936770", prod_area:"武汉"},
                    {prod_id:4, prod_name:"金矿", prod_pic:"http://img.blog.csdn.net/20151123175936770", prod_area:"武汉"},
                    {prod_id:5, prod_name:"香菇", prod_pic:"http://img.blog.csdn.net/20151123175936770", prod_area:"武汉"},
                    {prod_id:6, prod_name:"香菇", prod_pic:"http://img.blog.csdn.net/20151123175936770", prod_area:"武汉"}
                ]);
            },
            getNewProdList:function() {
                var param = {getMode:"new"};
                $ionicLoading.show(
                    {template:'LOADING...'}
                );
                DataRequestSvc.postData("/getProdList/new", param).then(
                    function(resp){
                        $ionicLoading.hide();
                        if ( resp.respCode==0 ){
                            mainSvcData.newProdList = resp.data;
                        }
                    },
                    function(err){

                        $ionicLoading.hide();
                    }
                );
            },
            getHotProdList:function() {
                var param = {getMode:"hot"};
                DataRequestSvc.postData("/getProdList/hot", param).then(
                    function(resp){
                        if ( resp.respCode==0 ){
                            mainSvcData.hotProdList = resp.data;
                        }
                    },
                    function(err){

                    }
                );
            }

        };
    }]);
