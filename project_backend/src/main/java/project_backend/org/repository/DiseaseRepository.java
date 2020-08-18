package project_backend.org.repository;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.CrudRepository;
import project_backend.org.entity.Disease;

import java.util.List;

public interface DiseaseRepository extends Neo4jRepository<Disease, Long> {
    Disease findByName(String name);
    List<Disease> findDiseasesByNameContains(String name);
    Long deleteByName(String name);
    @Query("MATCH(disease:Disease)"+
            "WHERE disease.name=~$name "+
             "RETURN disease LIMIT 15")
    List<Disease> findByNameContainingLimited(String name);
}
