package project_backend.org.service;

import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;
import project_backend.org.UnitTestDemoApplicationTests;
import project_backend.org.repository.UserRepository;
import project_backend.org.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class UserServiceTest extends UnitTestDemoApplicationTests {

    @Test
    public void contextLoads() {
    }

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Test
    @Rollback
    public void addUser() {
        User user = new User();
        user.setName("TestUser");
        user.setPassword("TestPwd");
        user.setEmail("TestEmail");
        //System.out.println(userService.addUser(user));
        assertEquals(user, userService.addUser(user));
    }

    @Test
    @Rollback
    public void checkUser() {
        String username = "TestUser";
        String password = "TestPwd";
        User user = new User();
        user.setName("TestUser");
        user.setPassword("TestPwd");
        user.setEmail("TestEmail");
        userRepository.save(user);
        user = userRepository.checkUser(username,password);

        assertEquals(user, userService.checkUser(username,password));
    }

    @Test
    @Rollback
    public void findUserByName(){
        String userName = "TestUser";
        User user = new User();
        user.setName("TestUser");
        user.setPassword("TestPwd");
        user.setEmail("TestEmail");
        userRepository.save(user);
        user = userRepository.findByName(userName);

        assertEquals(user, userService.findUserByName(userName));
    }

    @Test
    public void getUsers(){
        User user = new User();
        user.setName("TestUser");
        user.setPassword("TestPwd");
        user.setEmail("TestEmail");
        userRepository.save(user);
        List<User> users = userRepository.getUsers();
        for (int i=0;i<users.size();i++){
            System.out.print(users.get(i));
        }
        System.out.print(users.size());
        System.out.print("\n");
        assertEquals(users, userService.getUsers());
    }

}
