package org.sid.Commandeservice.repositories;

import org.sid.Commandeservice.entites.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CommandeRepository extends JpaRepository<Commande , Long> {
    @Query("SELECT COUNT(c) FROM Commande c")
    long getTotalCommandes();
}
