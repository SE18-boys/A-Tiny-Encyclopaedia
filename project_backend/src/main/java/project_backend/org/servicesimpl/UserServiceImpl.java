package project_backend.org.servicesimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import project_backend.org.dao.UserDao;
import project_backend.org.entity.User;
import project_backend.org.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class UserServiceImpl implements UserService, UserDetailsService {
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

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userDao.findByName(s);
        if(user == null){
            return null;
        }
        List<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(user.getRole());
        UserDetails userDetails = new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
        return  userDetails;
    }
}
