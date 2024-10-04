package org.sid.Commandeservice.web;

import lombok.AllArgsConstructor;
import org.sid.Commandeservice.entites.Commande;
import org.sid.Commandeservice.services.CommandeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class CommandeRestController {
    private CommandeService commandeService;

    @PostMapping("/addCommande")
    public Commande addCommande(@RequestBody Commande commande){
        return commandeService.addCommande(commande);
    }

    @GetMapping("/totalCommande")
    public Long getTotal(){
        return commandeService.getTotalCommandes();
    }

}
