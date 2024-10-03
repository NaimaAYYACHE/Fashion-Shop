package org.sid.Catalogueservice.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "fullProduit" , types = Produit.class)
public interface ProduitProjection {
    public  Long getId();
    public String getName();
    public String getDescription();
    public double getPrix();
    public Categorie getCategorie();
    public String getImage();
    public float getRemise();
    public int getQuantite();
}
