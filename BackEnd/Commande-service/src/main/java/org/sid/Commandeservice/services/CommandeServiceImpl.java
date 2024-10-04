package org.sid.Commandeservice.services;

import lombok.AllArgsConstructor;
import org.sid.Commandeservice.entites.Commande;
import org.sid.Commandeservice.entites.LigneCommande;
import org.sid.Commandeservice.repositories.CommandeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@AllArgsConstructor
@Transactional
public class CommandeServiceImpl implements CommandeService {
    private CommandeRepository commandeRepository ;
    @Override
    public Commande addCommande(Commande commande) {

        commande.setDateC(new Date());
        for (LigneCommande ligneCommande : commande.getLigneCommandes()) {
            ligneCommande.setCommande(commande);
        }

        return commandeRepository.save(commande);
    }

    @Override
    public Long getTotalCommandes() {

        return commandeRepository.getTotalCommandes();
    }
}
