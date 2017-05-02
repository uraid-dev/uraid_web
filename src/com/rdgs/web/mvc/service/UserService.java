package com.rdgs.web.mvc.service;

import org.apache.tools.ant.util.LinkedHashtable;
import org.springframework.stereotype.Service;
import org.walkframework.base.mvc.dao.BaseSqlSessionDao;
import org.walkframework.data.util.DataMap;
import org.walkframework.data.util.IData;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by crm on 2017/3/26.
 */
@Service
public class UserService {

    @Resource(name = "sqlSessionDao")
    private BaseSqlSessionDao dao;

    public Map<String, Object> getTestOne(int id){
        IData<String, Object> sqlParam = new DataMap<String, Object>();
        sqlParam.put("id", id);
        return dao.selectOne("testSQL.getTestOne", sqlParam);
    }


    public List<Map<String, Object>> getTestList(){
        return dao.selectList("testSQL.getTestList");
    }
}
