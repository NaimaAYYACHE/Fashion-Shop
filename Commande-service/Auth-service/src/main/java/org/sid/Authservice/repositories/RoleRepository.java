package org.sid.Authservice.repositories;

import org.sid.Authservice.entities.Role;
import org.sid.Authservice.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RoleRepository extends JpaRepository<Role,Long>{

}

