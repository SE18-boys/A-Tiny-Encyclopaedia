package project_backend.org.dao;

import org.bson.types.ObjectId;
import project_backend.org.entity.Disease;
import project_backend.org.entryAudit.DiseaseAudit;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface DiseaseDao {

    //疾病
    //查
    Disease findByName(String name);

    //增
    Disease addDisease(Disease disease);
    void updateAccompany_diseases(Disease disease, Set<Disease> accompany_diseases);
    void deleteByName(String name);

    //疾病审核
    //查
    Optional<List<DiseaseAudit>> findAuditByName(String name);
    Optional<DiseaseAudit> findAuditById(ObjectId id);

    //增、改
    DiseaseAudit AddOrUpdateDiseaseAudit(DiseaseAudit diseaseAudit);
}
