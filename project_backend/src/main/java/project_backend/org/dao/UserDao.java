package project_backend.org.dao;

import project_backend.org.entity.User;

import java.util.List;

public interface UserDao {
    User checkUser(String username, String password);
    User add(User user);
    List<User> getUsers();
    User findByName(String username);
}
