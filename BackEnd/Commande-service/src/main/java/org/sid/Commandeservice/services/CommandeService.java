package org.sid.Commandeservice.services;

import org.sid.Commandeservice.entites.Commande;

public interface CommandeService {

    public Commande addCommande(Commande commande);
    public Long getTotalCommandes();
}
