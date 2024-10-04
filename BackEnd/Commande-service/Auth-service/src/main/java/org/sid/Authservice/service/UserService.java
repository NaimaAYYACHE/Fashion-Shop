package org.sid.Authservice.service;

import org.sid.Authservice.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserService {
    public Page<User> getPageUsers(Pageable p , String n);
    public User userById(Long id );
    public User addUser(User u);
    public User updateUser(Long id , User u );
    public void delete (Long id);


}
