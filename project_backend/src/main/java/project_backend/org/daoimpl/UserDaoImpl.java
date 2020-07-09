package project_backend.org.daoimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import project_backend.org.dao.UserDao;
import project_backend.org.entity.User;
import project_backend.org.repository.UserRepository;

import java.util.List;
@Repository
public class UserDaoImpl implements UserDao {
    @Autowired
    UserRepository userRepository;
    @Override
    public User checkUser(String username, String password){

        return userRepository.checkUser(username,password);
    }
    @Override
    public void add(User user){
        userRepository.saveAndFlush(user);
    }

    @Override
    public List<User> getUsers(){
        return userRepository.getUsers();

    }
    @Override
    public  User findByName(String username){
        return userRepository.findByName(username);
    }
}
