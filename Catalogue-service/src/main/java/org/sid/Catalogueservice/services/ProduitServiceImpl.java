package org.sid.Catalogueservice.services;

import lombok.AllArgsConstructor;
import org.sid.Catalogueservice.entities.Produit;
import org.sid.Catalogueservice.repositories.ProduitRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class ProduitServiceImpl implements ProduitService {
    private ProduitRepository produitRepository;
    @Override
    public Page<Produit> getAllProuits(Pageable p, String keyword) {
        return produitRepository.findByNameContains(p,keyword);
    }

    @Override
    public Produit getProduitById(Long id) {
        return produitRepository.findById(id).get();
    }

    @Override
    public Produit addProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public Produit updateProduit(Long id, Produit produit) {
        Produit produit1 = produitRepository.findById(id).get();
        produit1.setName(produit.getName());
        produit1.setImage(produit.getImage());
        produit1.setRemise(produit.getRemise());
        produit1.setPrix(produit.getPrix());
        produit1.setDescription(produit.getDescription());
        produit1.setQuantite(produit.getQuantite());
        produit1.setCategorie(produit.getCategorie());
        return produitRepository.save(produit1);
    }

    @Override
    public void deleteProduit(Long id) {
         produitRepository.deleteById(id);
    }

    @Override
    public List<Produit> randomProduit() {
        return produitRepository.findRandomProducts();
    }

    @Override
    public Page<Produit> getProduitByCategorie(Pageable pageable , String keyword , Long id) {
        return produitRepository.findByCategorieIdAndNameContains(pageable ,keyword ,id);
    }

    @Override
    public Page<Produit> getProduitsWithQuantiteLessThan40(Pageable p, String keyword) {
        return produitRepository.findByQuantiteLessThan40AndNameContains(p, keyword);
    }

    @Override
    public Long getTotalProduit() {

        return produitRepository.getTotalProduits();
    }


}
