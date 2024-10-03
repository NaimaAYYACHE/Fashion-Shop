package org.sid.Catalogueservice.services;

import org.sid.Catalogueservice.entities.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProduitService {
    public Page<Produit> getAllProuits(Pageable p , String keyword);
    public Produit getProduitById(Long id);
    public Produit addProduit(Produit produit);
    public Produit updateProduit(Long id , Produit produit);
    public void deleteProduit(Long id);
    public List<Produit> randomProduit();
    public Page<Produit> getProduitByCategorie(Pageable pageable , String keyword ,Long id);
}
