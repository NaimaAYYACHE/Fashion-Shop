package org.sid.Commandeservice.feign;

import org.sid.Commandeservice.model.Produit;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("catalogue-service")
public interface ProduitRestClient {

    @GetMapping("produits/{id}?projection=fullProduit")
    public Produit getProduitById(@PathVariable Long id );

    @GetMapping("produits?projection=fullProduit")
    public PagedModel<Produit> getProduits();
}
