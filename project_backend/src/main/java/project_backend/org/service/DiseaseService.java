package project_backend.org.service;

import org.bson.types.ObjectId;
import project_backend.org.entity.Disease;
import project_backend.org.entryAudit.DiseaseAudit;

import java.util.List;
import java.util.Set;

public interface DiseaseService {
    //疾病
    Disease findDiseaseByName(String name);
    List<Disease> findDiseasesByNameContains(String name);
    Disease AddDisease(Disease disease);
    boolean UpdateAccompany_diseasesToDisease(String name, Set<String> accompany_names);
    void deleteDiseaseByName(String name);

    //疾病审核
    List<DiseaseAudit> findDiseaseAuditByName(String name);

    DiseaseAudit SetAuditResult(ObjectId id, String result, String reason);

    int UserAddDisease(DiseaseAudit newOne);

}
