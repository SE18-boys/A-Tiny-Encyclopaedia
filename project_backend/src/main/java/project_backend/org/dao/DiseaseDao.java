package project_backend.org.dao;

import project_backend.org.entity.Disease;

import java.util.List;
import java.util.Set;

public interface DiseaseDao {

    //查
    Disease findByName(String name);
    List<Disease> findDiseasesByNameContains(String name);

    //增
    Disease addDisease(Disease disease);
    void updateAccompany_diseases(Disease disease, Set<Disease> accompany_diseases);
    void deleteByName(String name);
}
