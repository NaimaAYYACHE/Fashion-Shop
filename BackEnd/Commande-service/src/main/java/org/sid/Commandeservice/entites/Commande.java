package org.sid.Commandeservice.entites;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.sid.Commandeservice.enums.StatusCommande;
import org.sid.Commandeservice.model.User;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class Commande {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private Date dateC ;
    private double tatalC;
    @Enumerated(EnumType.STRING)
    private StatusCommande status;
    private Long userId;
    @OneToMany(mappedBy = "commande", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<LigneCommande> ligneCommandes = new ArrayList<>();
    @Transient
    private User user ;


    public void addLigneCommande(LigneCommande ligneCommande) {
        ligneCommande.setCommande(this);  // Assurez-vous que la relation est définie des deux côtés
        this.ligneCommandes.add(ligneCommande);  // Ajoutez la ligne de commande à la liste
    }

}
