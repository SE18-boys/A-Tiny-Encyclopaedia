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
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;
import project_backend.org.UnitTestDemoApplicationTests;
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
public class UserControllerTest extends UnitTestDemoApplicationTests {

    @Test
    public void contextLoads() {
    }

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private UserService userService;

    @Autowired
    private UserController userController;

    private ObjectMapper om = new ObjectMapper();
    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    public void login() throws Exception {
        //test success example
        //定义请求参数，其为JSON对象
        JSONObject jsonData = new JSONObject();
        jsonData.put("username", "mikeshaw");
        jsonData.put("password", "123456");
        String responseString = mockMvc.perform(
                post("/loginmessage")    //请求的url,请求的方法是get
                        .contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root")
        ).andExpect(status().isOk())    //返回的状态是200
                .andReturn().getResponse().getContentAsString();   //将相应的数据转换为字符串
        System.out.println("--------返回的json = " + responseString);

        //test failed example
        JSONObject jsonData2 = new JSONObject();
        jsonData2.put("username", "mikeshaw");
        jsonData2.put("password", "111111");
        String responseString2 = mockMvc.perform(
                post("/loginmessage")    //请求的url,请求的方法是get
                        .contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData2)).param("pcode","root")
        ).andExpect(status().isOk())    //返回的状态是200
                .andReturn().getResponse().getContentAsString();   //将相应的数据转换为字符串
        System.out.println("--------返回的json = " + responseString2);
    }

    @Test
    @Rollback
    public void register() throws Exception {
        //test success example
        JSONObject jsonData = new JSONObject();
        jsonData.put("username", "testUser");
        jsonData.put("password", "123456");
        jsonData.put("email", "123456@qq.com");

        String responseString = mockMvc.perform(
                post("/register")    //请求的url,请求的方法是get
                        .contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root")
        ).andExpect(status().isOk())    //返回的状态是200
                .andReturn().getResponse().getContentAsString();   //将相应的数据转换为字符串
        System.out.println("--------返回的json = " + responseString);

        //test failed example
        String responseString2 = mockMvc.perform(
                post("/register")    //请求的url,请求的方法是get
                        .contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root")
        ).andExpect(status().isOk())    //返回的状态是200
                .andReturn().getResponse().getContentAsString();   //将相应的数据转换为字符串
        System.out.println("--------返回的json = " + responseString2);
    }

    @Test
    public void checkSession() {
    }

//    @Test
//    public void getUserById() throws Exception {
//        MvcResult result = mockMvc.perform(get("/UserController/getUserById/110").contentType(MediaType.APPLICATION_JSON_VALUE))
//                .andExpect(status().isOk()).andExpect(jsonPath("$.username").value("m11")).andReturn();
//    }

    @Test
    public void getUsers() throws Exception {
/*        List<User> temp_users = new LinkedList<>();
        temp_users.add(new User("110", "m11", 110));
        temp_users.add(new User("120", "m12", 120));*/

        MvcResult result = mockMvc.perform(get("/getUsers").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent = result.getResponse().getContentAsString();
        List<User> users = om.readValue(resultContent, new TypeReference<List<User>>() {});
/*        int count1 = users.size();
        for(User user : temp_users){
            userService.addUser(user);
        }
        MvcResult result2 = mockMvc.perform(get("/UserController/getAllUsers").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent2 = result.getResponse().getContentAsString();
        List<User> users2 = om.readValue(resultContent, new TypeReference<List<User>>() {});
        int count2 = users2.size();*/
        assertEquals(userService.getUsers().size(), users.size());
    }
}
