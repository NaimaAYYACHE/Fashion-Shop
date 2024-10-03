package org.sid.Authservice.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor @NoArgsConstructor @Builder@Data
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String nom ;
    private String prenom;

    private String email ;
    @Temporal(TemporalType.DATE )
    private Date dateNaiss;
    private String ville ;
    private String telephone;
    private String adresse;
    private String image;
    private int codePostal;
    private String password;
    private String residence;
    @ManyToOne
    private Role role;

}
