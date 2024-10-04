package org.sid.Authservice.service;

import lombok.AllArgsConstructor;
import org.sid.Authservice.entities.Role;
import org.sid.Authservice.repositories.RoleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class RoleServiceImpl implements RoleService {
    private RoleRepository roleRepository;
    @Override
    public List<Role> allRoles() {
        return roleRepository.findAll();
    }
}
