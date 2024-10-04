package org.sid.Commandeservice.entites;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.sid.Commandeservice.model.Produit;
import org.sid.Commandeservice.model.User;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class LigneCommande {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private int quantite ;
    private double prix;
    private Long produitId;
    private Long userId;
    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Commande commande ;
    @Transient
    private Produit produit ;
    @Transient
    private User user ;
}
