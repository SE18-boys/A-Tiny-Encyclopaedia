package project_backend.org.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
import project_backend.org.entryAudit.DiseaseAudit;
import project_backend.org.service.DiseaseService;
import project_backend.org.utils.searchutils.SearchUtil;

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

        String responseString = mockMvc.perform(post("/DiseaseByName").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
//        SearchUtil searchUtil = om.readValue(responseString, new TypeReference<SearchUtil>() {});
//        System.out.println("feedback result: " + "肺炎" +" : "+ searchUtil);

        //test if else example
        JSONObject jsonData2 = new JSONObject();
        jsonData2.put("name", "歪比歪比");

        String responseString2 = mockMvc.perform(post("/DiseaseByName").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData2)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();

//        Disease disease2 = om.readValue(responseString2, new TypeReference<Disease>() {});
//        System.out.println("feedback result: " + "failed" +" : "+ disease2);

        //test failed example
        JSONObject jsonData3 = new JSONObject();
        jsonData3.put("name", "肺");

        String responseString3 = mockMvc.perform(post("/DiseaseByName").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData3)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
//        Disease disease2 = om.readValue(responseString3, new TypeReference<Disease>() {});
//        System.out.println("feedback result: " + "failed" +" : "+ disease3);

    }
    @Test
    @Rollback
    public void UpdateDisease() throws Exception {
        String name="testData";
        JSONObject jsonData = new JSONObject();
        jsonData.put("name", name);
        jsonData.put("accompany", new String[]{"testData2"});

        String responseString = mockMvc.perform(post("/UpdateDisease").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
    }

    @Test
    @Transactional
    @Rollback()
    public void AddDisease() throws Exception {
        //test success example
        String name="UseForAddingTest";

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
        jsonData.put("stringid", "5f22afc21c8e266e19680df7");

        //this entity doesn't exist, go if.
        String responseString = mockMvc.perform(post("/AddDisease").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        Disease disease = om.readValue(responseString, new TypeReference<Disease>() {});
        System.out.println("feedback result: " + name +" : "+ disease);

        //this entity exist go else.
        String responseString2 = mockMvc.perform(post("/AddDisease").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        Disease disease2 = om.readValue(responseString2, new TypeReference<Disease>() {});
        System.out.println("feedback result: " + name +" : "+ disease2);

        //delete it anyway.
        diseaseService.deleteDiseaseByName(name);

    }

    @Test
    public void DiseaseAuditByName() throws Exception {
        String name = "test";
        JSONObject jsonData = new JSONObject();
        jsonData.put("name", name);

        String responseString = mockMvc.perform(post("/DiseaseAuditByName").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        List<DiseaseAudit> diseaseAudits = om.readValue(responseString, new TypeReference<List<DiseaseAudit>>() {});
        assertEquals(3, diseaseAudits.size());
    }

    @Test
    public void DiseaseUnauditByName() throws Exception {
        String name = "test";
        JSONObject jsonData = new JSONObject();
        jsonData.put("name", name);

        String responseString = mockMvc.perform(post("/DiseaseUnauditByName").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        List<DiseaseAudit> diseaseAudits = om.readValue(responseString, new TypeReference<List<DiseaseAudit>>() {});
        assertEquals(1, diseaseAudits.size());
    }

    @Test
    public void AllDiseaseUnaudit() throws Exception {
        JSONObject jsonData = new JSONObject();
        String responseString = mockMvc.perform(post("/AllDiseaseUnaudit").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        List<DiseaseAudit> diseaseAudits = om.readValue(responseString, new TypeReference<List<DiseaseAudit>>() {});
        System.out.println("feedback result: " +" : "+ diseaseAudits.size());
    }

    @Test
    public void AllDiseaseApproved() throws Exception {
        JSONObject jsonData = new JSONObject();
        String responseString = mockMvc.perform(post("/AllDiseaseApproved").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        List<DiseaseAudit> diseaseAudits = om.readValue(responseString, new TypeReference<List<DiseaseAudit>>() {});
        System.out.println("feedback result: " +" : "+ diseaseAudits.size());
    }

    @Test
    public void AllDiseaseDisapproving() throws Exception {
        JSONObject jsonData = new JSONObject();
        String responseString = mockMvc.perform(post("/AllDiseaseDisapproving").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        List<DiseaseAudit> diseaseAudits = om.readValue(responseString, new TypeReference<List<DiseaseAudit>>() {});
        System.out.println("feedback result: " +" : "+ diseaseAudits.size());
    }

    @Test
    @Rollback
    public void SetAuditResult() throws Exception {
        String name = "test";
        JSONObject jsonData = new JSONObject();
        jsonData.put("id", "5f22afc21c8e266e19680df7");
        jsonData.put("reason", "testreason");
        jsonData.put("result", "testresult");

        String responseString = mockMvc.perform(post("/SetAuditResult").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(jsonData)).param("pcode","root"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        DiseaseAudit diseaseAudit = om.readValue(responseString, new TypeReference<>() {});
        System.out.println("feedback result: " +" : "+ diseaseAudit);
    }
}
