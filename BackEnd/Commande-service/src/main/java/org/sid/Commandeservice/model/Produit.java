package org.sid.Commandeservice.model;

import lombok.Data;

@Data
public class Produit {
    private Long id ;
    private String name;
    private String Description;
    private double prix;
}
