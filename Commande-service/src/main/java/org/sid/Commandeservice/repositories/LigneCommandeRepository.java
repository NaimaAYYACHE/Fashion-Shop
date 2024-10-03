package org.sid.Commandeservice.repositories;

import feign.Param;
import org.sid.Commandeservice.entites.LigneCommande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface LigneCommandeRepository extends JpaRepository<LigneCommande, Long> {

    @Query("SELECT lc FROM LigneCommande lc WHERE lc.userId = :userId")
    List<LigneCommande> findLignesCommandeByUser(@Param("userId") Long userId);

    @Query("SELECT COUNT(lc) FROM LigneCommande lc WHERE lc.userId = :userId")
    Long countByUserId(@Param("userId") Long userId);

    @Query("SELECT COUNT(lc) FROM LigneCommande lc")
    Long getTotalLigneCommandes();


}
