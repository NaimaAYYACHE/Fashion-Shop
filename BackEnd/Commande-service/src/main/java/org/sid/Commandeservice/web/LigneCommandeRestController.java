package org.sid.Commandeservice.web;

import lombok.AllArgsConstructor;
import org.sid.Commandeservice.entites.Commande;
import org.sid.Commandeservice.entites.LigneCommande;
import org.sid.Commandeservice.services.LigneCommandeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class LigneCommandeRestController {
     private LigneCommandeService ligneCommandeService;

     @PostMapping("/addCart")
     public LigneCommande addCart(@RequestBody LigneCommande ligneCommande){
         return ligneCommandeService.addCart(ligneCommande);
     }
     @GetMapping("/CartByUser/{id}")
      public List<LigneCommande> cartByUser(@PathVariable Long id){
         return ligneCommandeService.getListByUser(id);
     }
    @GetMapping("/updateCart/{id}/{quantite}")
    public LigneCommande updateCart(@PathVariable Long id, @PathVariable int quantite) {
        return ligneCommandeService.updateCart(id, quantite);
    }


    @DeleteMapping("deleteCart/{id}")
     public void deteleCart(@PathVariable Long id){
         ligneCommandeService.deleteCart(id);
     }

    @GetMapping("/count/{id}")
    public  Long getCountByUser(@PathVariable Long id){
       return   ligneCommandeService.getcountbyUser(id);
     }





}
