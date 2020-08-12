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

import static org.junit.Assert.*;
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
        Disease noaccompany = new Disease();
        noaccompany.setId(-1);
        Disease testdisease = new Disease();
        testdisease.setName("testdisease");
        Disease accompany = new Disease();
        accompany.setId(1);
        accompany.setName("accompany");

        Set<String> accompany_diseases1 = new HashSet<>();
        accompany_diseases1.add("noaccompany");
        Set<String> accompany_diseases2 = new HashSet<>();
        accompany_diseases2.add("accompany");

        Set<Disease> diseases = new HashSet<>();
        diseases.add(accompany);

        when(diseaseDao.findByName("nodisease")).thenReturn(null);
        when(diseaseDao.findByName("noaccompany")).thenReturn(noaccompany);
        when(diseaseDao.findByName("accompany")).thenReturn(accompany);
        when(diseaseDao.findByName("testdisease")).thenReturn(testdisease);

        assertFalse(diseaseService.UpdateAccompany_diseasesToDisease("nodisease", accompany_diseases1));
        assertFalse(diseaseService.UpdateAccompany_diseasesToDisease("testdisease", accompany_diseases1));
        assertTrue(diseaseService.UpdateAccompany_diseasesToDisease("testdisease", accompany_diseases2));


        //diseaseService.UpdateAccompany_diseasesToDisease(name,accompany_diseases);

        verify(diseaseDao, times(1)).updateAccompany_diseases(testdisease, diseases);


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
    public void findAuditedDiseaseByName(){
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
        assertEquals(diseaseAudits, diseaseService.findDisapprovingDiseaseByName(name));
        assertEquals(diseaseAudits, diseaseService.findAllDisapprovingDisease());
    }

    @Test
    public void findAuditedDiseaseByName_NoResult(){
        String name = "nodisease";

        when(diseaseDao.findAuditByName(name)).thenReturn(Optional.empty());
        when(diseaseDao.findUnauditedEntryByName(name)).thenReturn(Optional.empty());
        when(diseaseDao.findAllUnauditedEntry()).thenReturn(Optional.empty());
        when(diseaseDao.findApprovedEntryByName(name)).thenReturn(Optional.empty());
        when(diseaseDao.findAllApprovedEntry()).thenReturn(Optional.empty());
        when(diseaseDao.findDisapprovingEntryByName(name)).thenReturn(Optional.empty());
        when(diseaseDao.findAllDisapprovingEntry()).thenReturn(Optional.empty());

        assertNull(diseaseService.findDiseaseAuditByName(name));
        assertNull(diseaseService.findUnauditedDiseaseByName(name));
        assertNull(diseaseService.findAllUnauditedDisease());
        assertNull(diseaseService.findApprovedDiseaseByName(name));
        assertNull(diseaseService.findAllApprovedDisease());
        assertNull(diseaseService.findDisapprovingDiseaseByName(name));
        assertNull(diseaseService.findAllDisapprovingDisease());
    }

}
