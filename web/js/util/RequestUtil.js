//数据请求：这里使用的是des加密算法，先将原始数据进行加密传递给服务器端。之后再将返回的数据进行解密操作
function getData(strUrl, requestObj, responseObj, deferred) {

    var strJson = angular.toJson(requestObj);
    console.log("请求的参数:"+strJson);
    //加密方法；三个key 只要和后端的商量好就可以了，随便填写什么。
    //var  enResult = strEnc(strJson,"e036hlqtculakx38tjw2u9gs","yvo0sovt414fakqwvchs70b3","abc6hlqtguluhc38tjw7y0k6");
    //var  enResult = strEnc(strJson,"e036hlqtculakx38tjw2u9gs","","");//旧版本加密
    var  enResult = encryptByDES(strJson, 'e036hlqtculakx38tjw2u9gs');//新版本加密
    //console.log("加密的数据"+enResult);

    var obj=get_enData(enResult);
    //var strJson = console.log("加密后封包处理："+angular.toJson(obj));

    var myUrl = SERVERURL + strUrl;
    console.log("AppItfService--请求链接：" + myUrl);

    $ionicLoading.show({
        //template: '拼命加载中，请耐心等候...'
        template: '<ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>'
    });

    var config = {
        timeout: 20000,
        headers: {'Content-Type': 'text/html; charset=UTF-8'},
        params: obj
    }

    $http.post(myUrl, {}, config)
        .success(function (data) {
            $ionicLoading.hide();
            //console.log("服务器端返回数据"+angular.toJson(data));
            //测试数据。到时候直接换成data就可以了
            //var enData={"respInfo":"QNMmKz+ZBed12ec/rRacBBAWbex6zTBmNBaInzInx64jf4wCsZ7R3hTKoGhulQF7Bd2koJ6smgWTZzvNNWAM0+A/Rn/FTk1/eL7jL8ygA5xX5EwA0/9E7GhUOhkqfIWTCg1Ewrfvos4LL6zfOlVCDi/7N3yGm9kS1pYOGR8RSREWmWwaLxizldkrxrhq3TvxVCss/GPifDMK0OkCdSl7/nOfrriL4NB6xfNmiXIAJa/yvFnQuK3+AeRlGRKN1tZFv+paeWU84gATJMhuhUBE7IFVdmfH7ZnOfElM3f0Cp1yK+3IeABhnjsffJdUNrPE7iKAAMkhhyBLagFo3K87bTAgUP21HAE6Q7mtnHeLP8l+FEOlXgvHKXhTEijgEqmEqJiHvP+7qn6dTLFJZfkxslKT04MLB30eX7B4xqHpnaw6whip8EBk2ttT5WiMcv2dTBjVOXSaVWMh6uEJnnvMInlzZRdf2sS05q1+KZYgu6TIscNNYQjJWHcpJtSP/V3hcgLXpDq8GlfxX9ZiTGPfg1IX3JWGmU7dPZHwvH8lcDCq1OLgHcqpetZNVCPQ3eWmKMKsLkTtGGcJqfzRBKPpErZ02OOna8FpUCn/si6G3T7Q8+EaxDc3DmE1dFzyr6zPHB0yWL7qYxr0srZlzEk385UFDf6axwzQlTvD1uTpP7BWxiR3cWiD6pZiRyseKx2yfijX2zg7FMLYfCKOjqEaB1wbjfy5ErasGCn/si6G3T7SlioZ+pq1RtjuQ6rmKx4zaBOmhoq6mTcjTbUnGQWUWYZRLxWWmrF7Swe5FLz7wO2QcWj+gzGSQUd1jvhwOOmW/1MpsRw4VLyCRidfSV5lfUjPxpFqgeSQliiU8sEFb/YHg4q6eJHOQQ5Vt7mxnzi73pQaYjduMdO0TUmIGn9WctNP9IOTbDO666jSHqMWDVFNUmZywx/ZJQ2Fvb3vXQc+cuBsxpMBTJJ6yR2GGrxwoI2fuEuWS6+LWDYeCXognZnkmvvwVdJZiJ1yLmq+A2dXBofGcUXxQCD9Svxy6vHPhOY2b3P9dMiLrtvtxuS6AvVza08Ls2Kp4NhN3lHUvHZdELrrRILH1gbd35e9MiD/I15MICFao5t4PjeSJu0wqROMnM/695jwKDdj1tM7KZtquK7JzO41lJgJlrHc7ucDTyyMU++wZ3PZDBR/AQcyzZtPgFevutyBrj54fXv6WjCU26Qnt/32bv+EpLuXUEH5UsmfPZWCTGza4G89mwpT/eChl1PhcQHirVAb49Vyu6+C/P0Bht3aBCDYwaG5Qmc9kTFij+Ms8+BJjAAASoC1Lva/8lJGkx7xdpvJmL0bVgCD3b1H0Xo+IADc0Ay+e/+JVNL+NSToplAjDOvcNtyshHwH76wr/aC6c6wdggZ/sskMFzS7hZbmC5BMK6sa7nEB+q19ZN93okJ2fBK5S5gsANFUhAzXG6Wv0MrhBPbGzfSWvknzFZEf/yq/yrGPt+LnJ/6Q4l95BcELhhTXavN+TaJqs7azFoII781xlUPJnA0BDhp/HwMyvvItjswUvcz+prFc0FT1G1o38Z8zYrWHspmnzviFBiPQh7hRov0Bhbt9FXek7LPk5xsWhcxSq3giYm8HtHGgBUqvLTfhXKfqa2Ko="};
            //console.log(data);
            //解密方法
            //var deResult = strDec(data.respInfo,"e036hlqtculakx38tjw2u9gs","yvo0sovt414fakqwvchs70b3","abc6hlqtguluhc38tjw7y0k6");
            //var deResult = strDec(data.respInfo,"e036hlqtculakx38tjw2u9gs","","");//旧版本解密
            var deResult = decryptByDES(data.respInfo, "e036hlqtculakx38tjw2u9gs");//新版本解密
            console.log("解密的数据"+deResult);
            //解密出来的是一个字符串，要转换成为对象，然后在做后面的操作
            deResult=angular.fromJson(deResult);
            angular.copy(deResult, responseObj);
            deferred.resolve(deResult);
        })
        .error(function (data) {
            $ionicLoading.hide();
            deferred.reject(data);
            // console.log("登录请求error：" + angular.toJson(data));
        });
}

function postData(url,param,respObj,deferred) {
    var strJson = angular.toJson(param);
    console.log("请求的参数:"+strJson);
    /*var  enResult = encryptByDES(strJson, 'e036hlqtculakx38tjw2u9gs');//新版本加密
    var obj=get_enData(enResult);
    var Url=SERVERURL+myUrl;*/
    var config = {
        headers:{ 'Content-Type': 'application/json;charset=UTF-8'},
        transformRequest: function (data) {
            return $.param(data);
        }
    };
    console.log("请求的地址:"+url);
    $http.post(url,param)
        .success(function(data){
            /*var deResult = decryptByDES(data.respInfo, "e036hlqtculakx38tjw2u9gs");//新版本解密
            console.log("解密的数据"+deResult);
            deResult=angular.fromJson(deResult);*/
            angular.copy(data, respObj);
            deferred.resolve(data);
        })
        .error(function(data){
            //$ionicLoading.hide();
            deferred.reject(data);
            console.log("请求error："+angular.toJson(data));
        });
}
