package org.sid.Commandeservice.entites;


import org.sid.Commandeservice.enums.StatusCommande;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;

@Projection(name = "fullCommande" , types = Commande.class)

public interface CommandeProjection {
    public  Long getId();
    public Date getDateC();
    public StatusCommande getStatus();
    public  Long getUserId();
}
