package org.sid.Authservice.repositories;

import org.sid.Authservice.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<User,Long> {
    Page<User> findByNomContains(Pageable p , String keyword);
    @Query("SELECT COUNT(u) FROM User u")
    Long getTotalUsers();
}
