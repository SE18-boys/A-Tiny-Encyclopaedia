package project_backend.org.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project_backend.org.entity.Disease;
import project_backend.org.service.DiseaseService;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
public class DiseaseController {
    @Autowired
    private DiseaseService diseaseService;

    @RequestMapping("/DiseaseByName")
    public Disease findDiseaseyName(@RequestBody Map<String, String> parms){
        String name = parms.get("name");
        return diseaseService.findDiseaseByName(name);
    }

    @RequestMapping("/AddDisease")
    public Disease addDisease(@RequestBody Map<String, String> parms){
        String prevent = parms.get("prevent");
        String yibao_status = parms.get("yibao");
        String cost_money = parms.get("cost");
        String get_prob = parms.get("getprob");
        String name = parms.get("name");
        String cause = parms.get("cause");
        String cure_lasttime = parms.get("curelasttime");
        String cure_prob = parms.get("cureprob");
        String get_way = parms.get("getway");
        String easy_get = parms.get("easyget");
        String desc = parms.get("desc");
        Disease disease = new Disease();
        Disease d = diseaseService.findDiseaseByName(name);
        if(d == null)
            disease.setId(-1);
        else
            disease.setId(d.getId());
        disease.setPrevent(prevent);
        disease.setYibao_status(yibao_status);
        disease.setCost_money(cost_money);
        disease.setGet_prob(get_prob);
        disease.setName(name);
        disease.setCause(cause);
        disease.setCure_lasttime(cure_lasttime);
        disease.setCure_prob(cure_prob);
        disease.setGet_way(get_way);
        disease.setEasy_get(easy_get);
        disease.setDesc(desc);

        return diseaseService.AddDisease(disease);
    }

    @RequestMapping("/UpdateDisease")
    public void updateDisease(@RequestBody Map<String, Object> parms){
        String name = String.valueOf(parms.get("name"));
        List<String> names = (List<String>) parms.get("accompanyDiseases");
        Set<String> accompany_names = new HashSet<>(names);
        diseaseService.UpdateAccompany_diseasesToDisease(name, accompany_names);
    }
}
