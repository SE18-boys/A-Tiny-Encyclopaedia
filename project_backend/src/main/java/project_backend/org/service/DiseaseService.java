package project_backend.org.service;

import project_backend.org.entity.Disease;

import java.util.Set;

public interface DiseaseService {
    Disease findDiseaseByName(String name);

    Disease AddDisease(Disease disease);
    boolean UpdateAccompany_diseasesToDisease(String name, Set<String> accompany_names);
}
