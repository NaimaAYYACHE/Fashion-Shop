package org.sid.Commandeservice.services;

import lombok.AllArgsConstructor;
import org.sid.Commandeservice.entites.Commande;
import org.sid.Commandeservice.entites.LigneCommande;
import org.sid.Commandeservice.feign.ProduitRestClient;
import org.sid.Commandeservice.repositories.LigneCommandeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
@AllArgsConstructor
public class LigneCommandeServiceImpl implements LigneCommandeService {

    private LigneCommandeRepository ligneCommandeRepository;
    private ProduitRestClient produitRestClient;
    @Override
    public LigneCommande addCart(LigneCommande ligneCommande) {
        return ligneCommandeRepository.save(ligneCommande);
    }

    @Override
    public LigneCommande updateCart(Long id, int qunatite ) {
        LigneCommande ligneCommande1 = ligneCommandeRepository.findById(id).get();
        ligneCommande1.setQuantite(qunatite);
        return ligneCommandeRepository.save(ligneCommande1);
    }

    @Override
    public LigneCommande getCart(Long id) {
        return ligneCommandeRepository.findById(id).get();
    }

    @Override
    public List<LigneCommande> getListByUser(Long userId) {
        List<LigneCommande> ligneCommandes = ligneCommandeRepository.findLignesCommandeByUser(userId) ;
        ligneCommandes.forEach(ligneCommande -> {
            ligneCommande.setProduit(produitRestClient.getProduitById(ligneCommande.getProduitId()));
        });
        return ligneCommandes;
    }

    @Override
    public void deleteCart(Long id) {
         ligneCommandeRepository.deleteById(id);
    }

    @Override
    public Long getcountbyUser(Long userId) {
        return ligneCommandeRepository.countByUserId(userId);
    }

    @Override
    public void updateLigneCommandes(List<LigneCommande> nouvelleLigneCommandes, Commande commande) {
        nouvelleLigneCommandes.forEach(ligneCommande -> {
            ligneCommande.setCommande(commande);
        });
        ligneCommandeRepository.saveAll(nouvelleLigneCommandes);
    }

    @Override
    public Long getTotalLigneCommande() {
        return ligneCommandeRepository.getTotalLigneCommandes();
    }


}
