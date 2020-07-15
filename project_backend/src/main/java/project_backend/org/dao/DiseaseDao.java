package project_backend.org.dao;

import project_backend.org.entity.Disease;

public interface DiseaseDao {
    Disease findByName(String name);
}
