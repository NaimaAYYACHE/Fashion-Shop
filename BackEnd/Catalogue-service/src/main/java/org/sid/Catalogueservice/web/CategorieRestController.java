package org.sid.Catalogueservice.web;

import lombok.AllArgsConstructor;
import org.sid.Catalogueservice.entities.Categorie;
import org.sid.Catalogueservice.repositories.CategorieRepository;
import org.sid.Catalogueservice.services.CategorieService;
import org.sid.Catalogueservice.services.CategorieServiceImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class CategorieRestController {

    private CategorieService categorieService ;

    @GetMapping("/AllCategories")
    public Page<Categorie> getCategories(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "9") int size ,
            @RequestParam(defaultValue = "") String keyword
    ) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return categorieService.getAllCategories(pageRequest , keyword);
    }
    @PostMapping("/addCategorie")
    public Categorie addCategorie(@RequestBody Categorie categorie){
        return categorieService.AddCategorie(categorie);
    }

    @GetMapping("/CategorieById/{id}")
    public Categorie categorieById(@PathVariable Long id){
        return  categorieService.categorieById(id);
    }

    @PutMapping("/updateCategorie/{id}")
    public Categorie updateCategorie(@PathVariable Long id ,@RequestBody Categorie categorie){
        return categorieService.updateCategorie(id, categorie );
    }

    @DeleteMapping("/delete/{id}")
    public void deteleCategorie(@PathVariable Long id ){
        categorieService.deleteCategorie(id);
    }

    @GetMapping("/Categories")
     public List<Categorie> categories(){
        return categorieService.getCategoris();
    }

    @GetMapping("/randomCategories")
    public List<Categorie> randomCategories(){
        return categorieService.randomCateogories();
    }


    @GetMapping("/totalCategorie")
    public Long getTotal(){
        return categorieService.getTotalCategorie();
    }


}
