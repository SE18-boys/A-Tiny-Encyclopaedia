package project_backend.org.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import net.minidev.json.JSONObject;
import org.junit.Before;
import org.junit.jupiter.api.AfterEach;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;
import project_backend.org.UnitTestDemoApplicationTests;
import project_backend.org.entity.Disease;
import project_backend.org.service.DiseaseService;
import project_backend.org.service.UserService;
import project_backend.org.entity.User;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class DiseaseControllerTest extends UnitTestDemoApplicationTests {

    @Test
    public void contextLoads() {
    }

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private DiseaseService diseaseService;

    @Autowired
    private DiseaseController diseaseController;

    private ObjectMapper om = new ObjectMapper();
    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    @Rollback
    public void DiseaseByName() throws Exception {
        //test success example
        JSONObject jsonData = new JSONObject();
        jsonData.put("name", "肺炎");

        String responseString = mockMvc.perform(
                post("/DiseaseByName")    //请求的url,请求的方法是get
                        .contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root")
        ).andExpect(status().isOk())    //返回的状态是200
                .andReturn().getResponse().getContentAsString();   //将相应的数据转换为字符串
        System.out.println("--------返回的json = " + responseString);

    }
    @Test
    @Rollback
    public void UpdateDisease() throws Exception {
        //test success example
        JSONObject jsonData = new JSONObject();
        jsonData.put("name", "testData");
        jsonData.put("accompanyDiseases", new String[]{"testData2", "testData3"});
        String responseString = mockMvc.perform(
                post("/UpdateDisease")    //请求的url,请求的方法是get
                        .contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root")
        ).andExpect(status().isOk())    //返回的状态是200
                .andReturn().getResponse().getContentAsString();   //将相应的数据转换为字符串
        System.out.println("--------返回的json = " + responseString);

    }

    @Test
    @Transactional
    @Rollback()
    public void AddDisease() throws Exception {
        //test success example
        String name="testData3";

        JSONObject jsonData = new JSONObject();
        jsonData.put("prevent", "testData");
        jsonData.put("yibao", "testData");
        jsonData.put("cost", "testData");
        jsonData.put("getprob", "testData");
        jsonData.put("name", name);
        jsonData.put("cause", "testData");
        jsonData.put("curelasttime", "testData");
        jsonData.put("cureprob", "testData");
        jsonData.put("getway", "testData");
        jsonData.put("easyget", "testData");
        jsonData.put("desc", "testData");

        String responseString = mockMvc.perform(post("/AddDisease").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        Disease disease = om.readValue(responseString, new TypeReference<Disease>() {});
        System.out.println("feedback result: " + name +" : "+ disease);
        //diseaseService.deleteDiseaseByName(name);

//        MvcResult result = mockMvc.perform(get("/UserController/getAllUsers").contentType(MediaType.APPLICATION_JSON_VALUE))
//                .andExpect(status().isOk()).andReturn();
//        String resultContent = result.getResponse().getContentAsString();
//        List<User> users = om.readValue(resultContent, new TypeReference<List<User>>() {});
//        assertEquals(userService.getAllUsers().size(), users.size());
    }
}
