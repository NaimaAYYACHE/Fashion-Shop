package org.sid.Catalogueservice.services;

import org.sid.Catalogueservice.entities.Categorie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface CategorieService {
    public Page<Categorie> getAllCategories(Pageable pageRequest, String keyword) ;
    public List<Categorie> getCategoris() ;
    public String convertImageToBase64(byte[] image);

    public Categorie categorieById(Long id);
    public Categorie AddCategorie(Categorie categorie);
    public Categorie updateCategorie(Long id,Categorie categorie);
    public void deleteCategorie(Long id);
    public Optional<Categorie> categorieByName(String name);
    public List<Categorie> randomCateogories();

}
