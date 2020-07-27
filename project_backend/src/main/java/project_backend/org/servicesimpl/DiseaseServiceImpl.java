package project_backend.org.servicesimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.org.dao.DiseaseDao;
import project_backend.org.entity.Disease;
import project_backend.org.service.DiseaseService;

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
    public List<Disease> findDiseasesByNameContains(String name){
        return diseaseDao.findDiseasesByNameContains(name);
    }
}
