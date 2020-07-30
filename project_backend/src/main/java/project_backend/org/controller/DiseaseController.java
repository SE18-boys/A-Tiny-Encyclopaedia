package project_backend.org.controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project_backend.org.entity.Disease;
import project_backend.org.entryAudit.DiseaseAudit;
import project_backend.org.service.DiseaseService;
import project_backend.org.utils.searchutils.SearchUtil;

import java.util.*;

@RestController
public class DiseaseController {
    @Autowired
    private DiseaseService diseaseService;


    //疾病
    @RequestMapping("/DiseaseByName")
    public SearchUtil findDiseaseByName(@RequestBody Map<String, String> parms){
        String name = parms.get("name");
        int single_search=1;
        int multiple_search=2;
        int not_found=3;
        Disease disease=diseaseService.findDiseaseByName(name);
        if(disease==null){
            List<Disease> diseases=diseaseService.findDiseasesByNameContains(name);
            if(diseases.size()==0){
                return new SearchUtil(not_found);
            }else{
                List<String> names=new ArrayList<>();
                for(Disease disease_tmp:diseases){
                    names.add(disease_tmp.getName());
                }
                return new SearchUtil(multiple_search,names);
            }
        }else{
                return new SearchUtil(single_search, disease);
        }
    }
    @RequestMapping("/DiseaseByAccurateName")
    public SearchUtil findDiseaseByAccurateName(@RequestBody Map<String, String> parms){
        String name = parms.get("name");
        Disease disease=diseaseService.findDiseaseByName(name);
        int single_search=1;
        return new SearchUtil(single_search, disease);
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


    //疾病审核
    @RequestMapping("/DiseaseAuditByName")
    public List<DiseaseAudit> findDiseaseAuditByName(@RequestBody Map<String, String> parms){
        String name = parms.get("name");
        return diseaseService.findDiseaseAuditByName(name);
    }

    @RequestMapping("/DiseaseUnauditByName")
    public List<DiseaseAudit> findDiseaseUnauditedByNmae(@RequestBody Map<String, String> parms){
        String name = parms.get("name");
        return diseaseService.findUnauditedDiseaseByName(name);
    }

    @RequestMapping("/AllDiseaseUnauditByName")
    public List<DiseaseAudit> findAllDiseaseUnaudited(){
        return diseaseService.findAllUnauditedDisease();
    }

    @RequestMapping("/SetAuditResult")
    public DiseaseAudit SetAuditResult(@RequestBody Map<String, String> parms){
        String reason = parms.get("reason");
        String result = parms.get("result");
        String stringid = parms.get("id");
        ObjectId id = new ObjectId(stringid);
        return diseaseService.SetAuditResult(id, result, reason);
    }
}
