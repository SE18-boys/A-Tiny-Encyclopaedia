package project_backend.org.daoimpl;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import project_backend.org.dao.DiseaseDao;
import project_backend.org.entity.Disease;
import project_backend.org.entryAudit.DiseaseAudit;
import project_backend.org.repository.DiseaseAuditRepository;
import project_backend.org.repository.DiseaseRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public class DiseaseDaoImpl implements DiseaseDao {

    @Autowired
    DiseaseRepository diseaseRepository;

    @Autowired
    DiseaseAuditRepository diseaseAuditRepository;

    @Override
    public Disease findByName(String name) {
        return diseaseRepository.findByName(name);
    }

    @Override
    public Disease addDisease(Disease disease) {
        return diseaseRepository.save(disease);
    }

    @Override
    public void updateAccompany_diseases(Disease disease, Set<Disease> accompany_diseases) {
        disease.setAccompany_diseases(accompany_diseases);
        diseaseRepository.save(disease);
    }

    @Override
    public void deleteByName(String name) {
        diseaseRepository.deleteByName(name);
    }

    @Override
    public Optional<List<DiseaseAudit>> findAuditByName(String name) {
        return diseaseAuditRepository.findByName(name);
    }

    @Override
    public Optional<DiseaseAudit> findAuditById(ObjectId id) {
        return diseaseAuditRepository.findById(id);
    }

    @Override
    public DiseaseAudit AddOrUpdateDiseaseAudit(DiseaseAudit diseaseAudit) {
        return diseaseAuditRepository.save(diseaseAudit);
    public List<Disease> findDiseasesByNameContains(String name){
        return diseaseRepository.findDiseasesByNameContains(name);

    }
}
