package org.sid.Catalogueservice.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor @NoArgsConstructor
@Data @Builder
public class Categorie {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private   String image;
    @Transient
    private String imageBase64;
    @JsonIgnore
    @OneToMany(mappedBy = "categorie")
    private List<Produit> produits;

}
