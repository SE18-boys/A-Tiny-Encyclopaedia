package project_backend.org.service;

import project_backend.org.entity.User;

import java.util.List;

public interface UserService {
    User checkUser(String username, String password);
    void addUser(User user);
    List<User> getUsers();
    User findUserByName(String username);
}
