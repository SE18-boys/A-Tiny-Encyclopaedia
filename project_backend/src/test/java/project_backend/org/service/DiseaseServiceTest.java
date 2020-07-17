package project_backend.org.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import project_backend.org.UnitTestDemoApplicationTests;
import project_backend.org.dao.DiseaseDao;
import project_backend.org.entity.Disease;
import project_backend.org.entity.User;
import project_backend.org.repository.DiseaseRepository;
import project_backend.org.repository.UserRepository;


import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class DiseaseServiceTest extends UnitTestDemoApplicationTests {

    @Test
    public void contextLoads() {
    }

    @Autowired
    private DiseaseService diseaseService;

    @MockBean
    private DiseaseDao diseaseDao;
    //@Autowired
    @MockBean
    private DiseaseRepository diseaseRepository;

    @Test
    @Rollback
    public void findDiseaseByName() {
        String name = "aDiseaseNobodyCare";
        Disease disease = new Disease();
        disease.setName(name);
        diseaseRepository.save(disease);
        disease = diseaseRepository.findByName(name);

        assertEquals(disease, diseaseService.findDiseaseByName(name));
        //diseaseRepository.deleteByName(name);
    }

    @Test
    @Rollback
    public void AddDisease() {
        String name = "aDiseaseNobodyCare";
        Disease disease = new Disease();
        disease.setName(name);
        when(diseaseDao.addDisease(disease)).thenReturn(disease);
        //System.out.println( diseaseService.AddDisease(disease));
        assertEquals(disease, diseaseService.AddDisease(disease));
    }

    @Test
    @Rollback
    public void UpdateAccompany_diseasesToDisease(){

        Set<String> accompany_diseases = new HashSet<>();
        String name = "aDiseaseNobodyCare";
        String other_name = "itsAccompany";
        accompany_diseases.add(other_name);

        diseaseService.UpdateAccompany_diseasesToDisease(name,accompany_diseases);

        verify(diseaseDao, times(1)).findByName(name);
    }

    @Test
    public void deleteDiseaseByName(){
        String name = "aDiseaseNobodyCare";
//        Disease disease = new Disease();
//        disease.setName(name);
//        diseaseRepository.save(disease);
        diseaseService.deleteDiseaseByName(name);

        verify(diseaseDao, times(1)).deleteByName(name);
    }

}
