package org.sid.Commandeservice.entites;


import org.springframework.data.rest.core.config.Projection;

@Projection(name = "fullLigneCommande" , types = LigneCommande.class)
public interface LigneCommandeProjection {

    public  Long getId();
    public Double getprix();
    public int  getQuantite();
    public  Long getProduitId();
}
