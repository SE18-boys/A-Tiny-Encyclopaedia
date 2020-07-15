package project_backend.org.servicesimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.org.dao.DiseaseDao;
import project_backend.org.entity.Disease;
import project_backend.org.service.DiseaseService;

@Service
public class DiseaseServiceImpl implements DiseaseService {
    @Autowired
    DiseaseDao diseaseDao;

    @Override
    public Disease findDiseaseByName(String name) {
        return diseaseDao.findByName(name);
    }
}
