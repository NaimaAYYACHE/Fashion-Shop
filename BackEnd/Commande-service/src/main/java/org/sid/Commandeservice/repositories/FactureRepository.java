package org.sid.Commandeservice.repositories;

import org.sid.Commandeservice.entites.Facture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface FactureRepository extends JpaRepository<Facture, Long> {
}
