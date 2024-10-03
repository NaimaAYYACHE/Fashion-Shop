package org.sid.Catalogueservice.web;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.sid.Catalogueservice.entities.Produit;
import org.sid.Catalogueservice.services.ProduitService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class ProduitRestController {
    private ProduitService produitService;

    @GetMapping("/AllProduits")
    public Page<Produit> getPageProduit(@RequestParam(defaultValue = "0") int page ,
                                        @RequestParam(defaultValue = "4") int size ,
                                        @RequestParam(defaultValue = "") String keyword){
        return produitService.getAllProuits(PageRequest.of(page , size) , keyword);
    }

    @GetMapping("/produitById/{id}")
    public Produit getProduitById(@PathVariable Long id ){
        return produitService.getProduitById(id);
    }

    @PostMapping("/addProduit")
    public Produit addProduit(@RequestBody Produit produit){
        return produitService.addProduit(produit);
    }

    @PutMapping("/updateProduit/{id}")
    public Produit updateProduit(@PathVariable Long id , @RequestBody Produit produit){
        return produitService.updateProduit(id , produit);
    }

    @DeleteMapping("/deleteProduit/{id}")
    public void deleteProduit(@PathVariable Long id){
        produitService.deleteProduit(id);
    }

    @GetMapping("/randomProduit")
    public List<Produit> randomProducts(){
        return produitService.randomProduit();
    }

    @GetMapping("/produitByCategorie/{id}")
    public Page<Produit> getProduitByCategorie(@RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "4") int size,
                                               @RequestParam(defaultValue = "") String keyword,
                                               @PathVariable Long id) {
        return produitService.getProduitByCategorie(PageRequest.of(page, size), keyword, id);
    }

}
