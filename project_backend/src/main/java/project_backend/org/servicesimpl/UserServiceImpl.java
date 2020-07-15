package project_backend.org.servicesimpl;

import org.springframework.beans.factory.annotation.Autowired;
import project_backend.org.dao.UserDao;
import project_backend.org.entity.User;
import project_backend.org.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public User checkUser(String username, String password){
        return userDao.checkUser(username,password);
    }

    @Override
    public User addUser(User user){return userDao.add(user);}

    @Override
    public List<User> getUsers(){
        return userDao.getUsers();
    }

    @Override
    public  User findUserByName(String username){return userDao.findByName(username);}
}
