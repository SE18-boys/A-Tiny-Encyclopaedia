package project_backend.org.daoimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import project_backend.org.dao.DiseaseDao;
import project_backend.org.entity.Disease;
import project_backend.org.repository.DiseaseRepository;

@Repository
public class DiseaseDaoImpl implements DiseaseDao {

    @Autowired
    DiseaseRepository diseaseRepository;

    @Override
    public Disease findByName(String name) {
        return diseaseRepository.findByName(name);
    }
}
