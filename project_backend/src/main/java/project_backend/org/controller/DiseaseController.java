package project_backend.org.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project_backend.org.entity.Disease;
import project_backend.org.service.DiseaseService;

import java.util.Map;

@RestController
public class DiseaseController {
    @Autowired
    private DiseaseService diseaseService;

    @RequestMapping("/DiseaseByName")
    public Disease findDiseaseyName(@RequestBody Map<String, String> parms){
        String name = parms.get("name");
        return diseaseService.findDiseaseByName(name);
    }

}
