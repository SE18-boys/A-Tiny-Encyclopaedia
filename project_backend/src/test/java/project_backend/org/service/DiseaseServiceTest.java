package project_backend.org.service;

import org.bson.types.ObjectId;
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
import project_backend.org.entryAudit.DiseaseAudit;
import project_backend.org.repository.DiseaseAuditRepository;
import project_backend.org.repository.DiseaseRepository;
import project_backend.org.repository.UserRepository;


import java.util.*;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
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

    @MockBean
    private DiseaseAuditRepository diseaseAuditRepository;

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
//        disease.setUsername(name);
//        diseaseRepository.save(disease);
        diseaseService.deleteDiseaseByName(name);

        verify(diseaseDao, times(1)).deleteByName(name);
    }

    @Test
    public void findUnauditedDiseaseByName(){
        String name = "DiseaseAudit";
        List<DiseaseAudit> diseaseAudits = new ArrayList<>();

        DiseaseAudit diseaseAudit1 = new DiseaseAudit();
        diseaseAudit1.setName(name);
        diseaseAudit1.setStatus("待审核");
        diseaseAudit1.setId(new ObjectId("5f1f7d86063df64d0662da98"));
        diseaseAudits.add(diseaseAudit1);

        when(diseaseDao.findAuditByName(name)).thenReturn(Optional.of(diseaseAudits));
        when(diseaseDao.findUnauditedEntryByName(name)).thenReturn(Optional.of(diseaseAudits));
        when(diseaseDao.findAllUnauditedEntry()).thenReturn(Optional.of(diseaseAudits));
        when(diseaseDao.findApprovedEntryByName(name)).thenReturn(Optional.of(diseaseAudits));
        when(diseaseDao.findAllApprovedEntry()).thenReturn(Optional.of(diseaseAudits));
        when(diseaseDao.findDisapprovingEntryByName(name)).thenReturn(Optional.of(diseaseAudits));
        when(diseaseDao.findAllDisapprovingEntry()).thenReturn(Optional.of(diseaseAudits));

        assertEquals(diseaseAudits, diseaseService.findDiseaseAuditByName(name));
        assertEquals(diseaseAudits, diseaseService.findUnauditedDiseaseByName(name));
        assertEquals(diseaseAudits, diseaseService.findAllUnauditedDisease());
        assertEquals(diseaseAudits, diseaseService.findApprovedDiseaseByName(name));
        assertEquals(diseaseAudits, diseaseService.findAllApprovedDisease());
        assertEquals(diseaseAudits, diseaseService.findDiseaseAuditByName(name));
        assertEquals(diseaseAudits, diseaseService.findAllDisapprovingDisease());
    }

}
