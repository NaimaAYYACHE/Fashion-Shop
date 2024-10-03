package org.sid.Commandeservice;

import lombok.AllArgsConstructor;
import org.sid.Commandeservice.entites.Commande;
import org.sid.Commandeservice.entites.Facture;
import org.sid.Commandeservice.entites.LigneCommande;
import org.sid.Commandeservice.enums.StatusCommande;
import org.sid.Commandeservice.feign.ProduitRestClient;
import org.sid.Commandeservice.feign.UserRestClient;
import org.sid.Commandeservice.repositories.CommandeRepository;
import org.sid.Commandeservice.repositories.FactureRepository;
import org.sid.Commandeservice.repositories.LigneCommandeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.Random;

@SpringBootApplication
@EnableDiscoveryClient
@AllArgsConstructor
@EnableFeignClients
public class CommandeServiceApplication {


	public static void main(String[] args) {
		SpringApplication.run(CommandeServiceApplication.class, args);
	}

	//@Transactional
	//@Bean
	CommandLineRunner start(CommandeRepository commandeRepository,
							LigneCommandeRepository ligneCommandeRepository,
							UserRestClient userRestClient,
							ProduitRestClient produitRestClient,
							FactureRepository factureRepository) {
		return args -> {
			Random random = new Random();

			userRestClient.getUsers().forEach(u -> {

					Commande commande = new Commande();
					commande.setUserId(u.getId());
					commande.setStatus(StatusCommande.EN_COURS);
					commande.setDateC(new Date());
					commande.setTatalC(1 + random.nextInt(986));

					// Sauvegarder la commande
					commandeRepository.save(commande);
					System.out.println(commande.toString());

					produitRestClient.getProduits().forEach(p -> {
						LigneCommande ligneCommande = new LigneCommande();
						ligneCommande.setPrix(1 + random.nextInt(69));
						ligneCommande.setQuantite(2);
						ligneCommande.setProduitId(p.getId());

						// Associer la ligne de commande à la commande

						// Sauvegarder la ligne de commande
						ligneCommandeRepository.save(ligneCommande);

						// Ajouter la ligne de commande à la commande
						commande.getLigneCommandes().add(ligneCommande);
					});

					// Sauvegarder la commande mise à jour
					commandeRepository.save(commande);

					// Sauvegarder la facture avec la commande associée
					factureRepository.save(new Facture(null, 1 + random.nextInt(100), new Date(), commande));

			});
		};
	}


}
