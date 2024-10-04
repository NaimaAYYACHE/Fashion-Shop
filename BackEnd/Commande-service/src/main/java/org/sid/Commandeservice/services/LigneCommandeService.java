package org.sid.Commandeservice.services;

import org.sid.Commandeservice.entites.Commande;
import org.sid.Commandeservice.entites.LigneCommande;

import java.util.List;

public interface LigneCommandeService {

    public LigneCommande addCart(LigneCommande ligneCommande);
    public LigneCommande updateCart(Long id , int quantite);
    public LigneCommande getCart(Long id);
    List<LigneCommande> getListByUser(Long userId);
    void deleteCart(Long id);

    public Long getcountbyUser(Long userId);
    public void updateLigneCommandes( List<LigneCommande> nouvelleLigneCommandes , Commande commande) ;

    public Long getTotalLigneCommande();
}
