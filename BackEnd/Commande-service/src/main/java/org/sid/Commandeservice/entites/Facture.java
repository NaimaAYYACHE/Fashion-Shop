package org.sid.Commandeservice.entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor @NoArgsConstructor @Builder @Data
public class Facture {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private double montantTotal;
    private Date dateEmission;
    @OneToOne
    private Commande commande;

}
