package project_backend.org.repository;

import com.mongodb.lang.NonNull;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import project_backend.org.entryAudit.DiseaseAudit;

import java.util.List;
import java.util.Optional;

public interface DiseaseAuditRepository extends MongoRepository<DiseaseAudit, ObjectId> {
    //Optional<DiseaseAudit> findByName(String name);

    Optional<List<DiseaseAudit>> findByName(String name);

    Optional<DiseaseAudit> findById(ObjectId id);

}
