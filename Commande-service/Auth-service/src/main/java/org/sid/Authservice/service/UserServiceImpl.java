package org.sid.Authservice.service;

import lombok.AllArgsConstructor;
import org.sid.Authservice.entities.User;
import org.sid.Authservice.repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    @Override
    public Page<User> getPageUsers(Pageable p, String n) {

        return userRepository.findByNomContains(p ,n);
    }


    @Override
    public User userById(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
    public User addUser(User u) {
        return userRepository.save(u);
    }

    @Override
    public User updateUser(Long id, User u) {
        User user = userRepository.findById(id).get();
        user.setEmail(u.getEmail());
        user.setAdresse(u.getAdresse());
        user.setNom(u.getNom());
        user.setPassword(u.getPassword());
        user.setPrenom(u.getPrenom());
        user.setRole(u.getRole());
        user.setCodePostal(u.getCodePostal());
        user.setVille(u.getVille());
        user.setTelephone(u.getTelephone());
        return userRepository.save(user);
    }
    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
