package org.sid.Catalogueservice.repositories;

import org.sid.Catalogueservice.entities.Categorie;
import org.sid.Catalogueservice.entities.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface CategorieRepository extends JpaRepository<Categorie , Long> {
    Optional<Categorie> findByName(String name);
    Page<Categorie> findByNameContains(Pageable pageable , String keyword);

    @Query(value = "SELECT * FROM categorie ORDER BY RAND() LIMIT 9", nativeQuery = true)
    List<Categorie> findRandomCategories();
}
