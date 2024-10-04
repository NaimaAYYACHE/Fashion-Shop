package org.sid.Catalogueservice.repositories;

import org.sid.Catalogueservice.entities.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ProduitRepository extends JpaRepository<Produit, Long> {
    Page<Produit> findByNameContains(Pageable pageable , String keyword);

    @Query(value = "SELECT * FROM produit ORDER BY RAND() LIMIT 8", nativeQuery = true)
    List<Produit> findRandomProducts();


    @Query("SELECT p FROM Produit p WHERE p.categorie.id = :id AND CAST(p.name AS string) LIKE %:keyword%")
    Page<Produit> findByCategorieIdAndNameContains(Pageable pageable, String keyword, Long id);


    @Query("SELECT p FROM Produit p WHERE p.quantite < 40 AND LOWER(p.name) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    Page<Produit> findByQuantiteLessThan40AndNameContains(Pageable pageable, @Param("keyword") String keyword);

    @Query("SELECT COUNT(p) FROM Produit p")
    Long getTotalProduits();
}

