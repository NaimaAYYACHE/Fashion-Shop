package org.sid.Commandeservice.entites;

import org.springframework.data.rest.core.config.Projection;

import java.util.Date;

@Projection(name = "fullFacture" , types = Facture.class)
public interface FactureProjection {
    public Long getId();
    public double getMontantTotal();
    public Date  getDateEmission();
}
