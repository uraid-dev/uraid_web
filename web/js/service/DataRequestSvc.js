angular.module('DataRequest.service',[])
    .service('DataRequestSvc', ['$http','$q',function($http,$q){
        return {
            postData:function(url,param,ifShowLoading){
                var deferred = $q.defer();
                postData(url,param,deferred);
                return deferred.promise;
            }
        };

        function postData(url,param,deferred) {
            var strJson = angular.toJson(param);
            console.log("POST请求["+url+"]的参数:"+strJson);
            /*var  enResult = encryptByDES(strJson, 'e036hlqtculakx38tjw2u9gs');//新版本加密
             var obj=get_enData(enResult);
             var Url=SERVERURL+myUrl;*/
            var config = {
                headers:{ 'Content-Type': 'application/json;charset=UTF-8'},
                transformRequest: function (data) {
                    return $.param(data);
                }
            };
            $http.post("/rdgs/rdgs"+url,param)
                .success(function(data){
                    /*var deResult = decryptByDES(data.respInfo, "e036hlqtculakx38tjw2u9gs");//新版本解密
                     console.log("解密的数据"+deResult);
                     deResult=angular.fromJson(deResult);*/
                    //angular.copy(data, respObj);
                    deferred.resolve(data);
                })
                .error(function(data){
                    //$ionicLoading.hide();
                    deferred.reject(data);
                    console.log("请求error："+angular.toJson(data));
                });
        }

    }]);

