package project_backend.org.servicesimpl;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.org.dao.DiseaseDao;
import project_backend.org.entity.Disease;
import project_backend.org.entryAudit.DiseaseAudit;
import project_backend.org.service.DiseaseService;

import java.text.SimpleDateFormat;
import java.util.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class DiseaseServiceImpl implements DiseaseService {
    @Autowired
    DiseaseDao diseaseDao;

    @Override
    public Disease findDiseaseByName(String name) {
        return diseaseDao.findByName(name);
    }

    @Override
    public Disease AddDisease(Disease disease) {
        return diseaseDao.addDisease(disease);
    }

    @Override
    public boolean UpdateAccompany_diseasesToDisease(String name, Set<String> accompany_names) {
        Disease disease = diseaseDao.findByName(name);
        if(disease == null) return false;
        Set<Disease> accompany_diseases = new HashSet<>();
        for(String accompany_name: accompany_names){
            Disease d = diseaseDao.findByName(accompany_name);
            System.out.println(accompany_name);
            System.out.println(d);
            System.out.println(d.getId());
            if(d.getId()==-1) return false;
            accompany_diseases.add(d);
        }
        diseaseDao.updateAccompany_diseases(disease, accompany_diseases);
        return true;
    }

    @Override
    public void deleteDiseaseByName(String name) {
        diseaseDao.deleteByName(name);
    }

    @Override
    public List<DiseaseAudit> findDiseaseAuditByName(String name) {
        Optional<List<DiseaseAudit>> DiseaseAudits = diseaseDao.findAuditByName(name);
        if (DiseaseAudits.isPresent()) {
            //System.out.println(DiseaseAudits.get().get(0));
            List<DiseaseAudit> diseaseAudits = DiseaseAudits.get();
            for (DiseaseAudit diseaseAudit : diseaseAudits) {
                diseaseAudit.setStringid(diseaseAudit.getId().toString());
            }
            return diseaseAudits;
        } else {
            return null;
        }
    }

    @Override
    public List<DiseaseAudit> findUnauditedDiseaseByName(String name) {
        Optional<List<DiseaseAudit>> optionalDiseaseAudits = diseaseDao.findUnauditedEntryByName(name);
        if(optionalDiseaseAudits.isPresent()){
            List<DiseaseAudit> diseaseAudits = optionalDiseaseAudits.get();
            for(DiseaseAudit diseaseAudit : diseaseAudits){
                diseaseAudit.setStringid(diseaseAudit.getId().toString());
            }
            return diseaseAudits;
        }
        else {
            return null;
        }
    }

    @Override
    public List<DiseaseAudit> findAllUnauditedDisease() {
        Optional<List<DiseaseAudit>> optionalDiseaseAudits = diseaseDao.findAllUnauditedEntry();
        if(optionalDiseaseAudits.isPresent()){
            List<DiseaseAudit> diseaseAudits = optionalDiseaseAudits.get();
            for(DiseaseAudit diseaseAudit : diseaseAudits){
                diseaseAudit.setStringid(diseaseAudit.getId().toString());
            }
            return diseaseAudits;
        }
        else {
            return null;
        }
    }

    @Override
    public List<DiseaseAudit> findApprovedDiseaseByName(String name) {
        Optional<List<DiseaseAudit>> optionalDiseaseAudits = diseaseDao.findApprovedEntryByName(name);
        if(optionalDiseaseAudits.isPresent()){
            List<DiseaseAudit> diseaseAudits = optionalDiseaseAudits.get();
            for(DiseaseAudit diseaseAudit : diseaseAudits){
                diseaseAudit.setStringid(diseaseAudit.getId().toString());
            }
            return diseaseAudits;
        }
        else {
            return null;
        }
    }

    @Override
    public List<DiseaseAudit> findDisapprovingDiseaseByName(String name) {
        Optional<List<DiseaseAudit>> optionalDiseaseAudits = diseaseDao.findDisapprovingEntryByName(name);
        if(optionalDiseaseAudits.isPresent()){
            List<DiseaseAudit> diseaseAudits = optionalDiseaseAudits.get();
            for(DiseaseAudit diseaseAudit : diseaseAudits){
                diseaseAudit.setStringid(diseaseAudit.getId().toString());
            }
            return diseaseAudits;
        }
        else {
            return null;
        }
    }

    @Override
    public DiseaseAudit SetAuditResult(ObjectId id, String result, String reason) {
        Optional<DiseaseAudit> diseaseAuditOptional = diseaseDao.findAuditById(id);
        if (diseaseAuditOptional.isPresent()) {
            DiseaseAudit diseaseAudit = diseaseAuditOptional.get();
            diseaseAudit.setStatus(result);
            diseaseAudit.setReason(reason);
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date now = new Date();
            String date = dateFormat.format(now);
            diseaseAudit.setAudit_date(date);
            diseaseDao.AddOrUpdateDiseaseAudit(diseaseAudit);
            return diseaseAudit;
        } else {
            return null;
        }
    }
    public List<Disease> findDiseasesByNameContains(String name){
        return diseaseDao.findDiseasesByNameContains(name);
    }
}
