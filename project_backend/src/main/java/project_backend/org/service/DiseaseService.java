package project_backend.org.service;

import project_backend.org.entity.Disease;

public interface DiseaseService {
    Disease findDiseaseByName(String name);
}
