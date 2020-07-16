package project_backend.org.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import project_backend.org.UnitTestDemoApplicationTests;
import project_backend.org.entity.Disease;
import project_backend.org.entity.User;
import project_backend.org.repository.DiseaseRepository;


import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class DiseaseServiceTest extends UnitTestDemoApplicationTests {

    @Test
    public void contextLoads() {
    }

    @Autowired
    private DiseaseService diseaseService;

    @Autowired
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
        diseaseRepository.deleteByName(name);
    }

    @Test
    @Rollback
    public void AddDisease() {

    }

    @Test
    @Rollback
    public void UpdateAccompany_diseasesToDisease(){

    }

    @Test
    public void deleteDiseaseByName(){

    }

}
