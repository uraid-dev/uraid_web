package com.rdgs.web.mvc.controller;



import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.rdgs.web.mvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.walkframework.base.mvc.controller.base.BaseController;
import org.walkframework.data.util.InParam;


import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
@RequestMapping("/rdgs")
public class RdgsController extends BaseController{
    @Autowired
    protected UserService userService = null;

    @RequestMapping(value="/")
    public ModelAndView index(HttpServletRequest request){
        return new ModelAndView("index", null);
    }

    @RequestMapping(value = "/main/{path1}", method = RequestMethod.POST)
    public @ResponseBody Object main(@PathVariable String path1, @RequestBody Map<String, Object> reqParam){
        log.debug("RdgsController.main["+path1+"] begins! params: "+reqParam.toString());
        // do something...
        JSONObject result = new JSONObject();
        result.put("data", userService.getTestList());
        result.put("entrance", path1);
        result.put("respCode", 0);
        result.put("respInfo", "成功");
        return result;
    }

    @RequestMapping(value="/getProdList/{getMode}", method=RequestMethod.POST)
    public @ResponseBody Object getProdList(@PathVariable String getMode, @RequestBody Map<String, Object> reqParam){
        log.debug("RdgsController.getProdList["+getMode+"] begins! params: "+reqParam.toString());
        JSONObject result = new JSONObject();
        JSONArray prodList = getTestProdList(getMode);

        result.put("data", prodList);
        result.put("respCode", 0);
        result.put("respInfo", "成功");
        return result;
    }

    @RequestMapping(value="/getProdInfo/{prodId}", method = RequestMethod.POST)
    public @ResponseBody Object getProdInfo(@PathVariable String prodId) {
        JSONObject result = new JSONObject();
        JSONObject data = new JSONObject();
        data.put("prod_id", Integer.valueOf(prodId));
        data.put("prod_name", "产品测试#"+prodId);
        data.put("prod_desc", "最新上架最新上架，最新上架，最新上架，最新上架，最新上架，最新上架，最新上架");
        JSONArray prodPicArr = new JSONArray();
        prodPicArr.add("test_pic_sm.png");
        prodPicArr.add("test_pic_sm.png");
        prodPicArr.add("test_pic_sm.png");
        prodPicArr.add("test_pic_sm.png");
        data.put("prod_main_pics", prodPicArr);
        try {
            Thread.sleep(1000l);
        } catch (InterruptedException e) {
            log.error("sleep exception ", e);
        }
        result.put("respCode", 0);
        result.put("respDesc", "OK");
        result.put("data", data);
        return result;
    }

    private JSONArray getTestProdList(String getMode){
        JSONArray arr = new JSONArray();

        int count = 10;
        if ( "new".equals(getMode) ){
            count = 7;
        }else if ( "hot".equals(getMode) ){
            count = 4;
        }else if ( "fornow".equals(getMode) ){
            count = 6;
        }
        for ( int i=0; i<count; i++ ){
            JSONObject prod = new JSONObject();
            prod.put("prod_id", i+1);
            prod.put("prod_name", i+"测试产品#"+(int)(Math.random()*50));
            prod.put("prod_desc", "最新上架最新上架，最新上架，最新上架，最新上架，最新上架，最新上架，最新上架");
            prod.put("main_img_src", "test_pic_sm.png");
            prod.put("prod_sold", (int)(Math.random()*100));
            prod.put("prod_price", (float)Math.random()*5);
            prod.put("prod_price_unit", "元/斤");
            arr.add(prod);
        }

        return arr;
    }
}
