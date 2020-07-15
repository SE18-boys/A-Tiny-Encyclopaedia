package project_backend.org.repository;

import org.springframework.data.repository.CrudRepository;
import project_backend.org.entity.Disease;

public interface DiseaseRepository extends CrudRepository<Disease, Long> {
    Disease findByName(String name);
}
