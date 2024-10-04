package org.sid.Catalogueservice;

import lombok.AllArgsConstructor;
import org.sid.Catalogueservice.entities.Categorie;
import org.sid.Catalogueservice.entities.Produit;
import org.sid.Catalogueservice.repositories.CategorieRepository;
import org.sid.Catalogueservice.repositories.ProduitRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
@AllArgsConstructor
public class CatalogueServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CatalogueServiceApplication.class, args);
	}
    //@Bean
	/*CommandLineRunner strat(CategorieRepository
							 categorieRepository , ProduitRepository produitRepository){
		return args -> {
		     	categorieRepository.save(new Categorie(null,"Téléphones" , null));
		     	categorieRepository.save(new Categorie(null,"Informatique" , null));
		     	categorieRepository.save(new Categorie(null,"Vêtements" , null));
		     	categorieRepository.save(new Categorie(null,"Électroménager" , null));
		     	categorieRepository.save(new Categorie(null,"Livres" , null));

				produitRepository.save(new Produit(null , "iPhone X" ,"Smartphone haut de gamme" , 9999 , categorieRepository.getById(1L))) ;
				produitRepository.save(new Produit(null , "Samsung Galaxy S20" ,"Puissant smartphone Android" , 13000 , categorieRepository.getReferenceById(1L))) ;
				produitRepository.save(new Produit(null , "MacBook Pro" ,"Ordinateur portable performant" , 28997 , categorieRepository.getReferenceById(2L))) ;
				produitRepository.save(new Produit(null , "HP Envy" ,"Ordinateur portable élégant" , 7985 , categorieRepository.getReferenceById(2L))) ;
				produitRepository.save(new Produit(null , "T-shirt noir" ,"T-shirt en coton confortable" , 235 , categorieRepository.getReferenceById(3L))) ;
				produitRepository.save(new Produit(null , "Chemise à rayures" ,"T-shirt en coton confortable" , 300 , categorieRepository.getReferenceById(3L))) ;

		};
	}*/
}
