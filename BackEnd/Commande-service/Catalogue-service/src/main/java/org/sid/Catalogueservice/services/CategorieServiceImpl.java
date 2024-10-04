package org.sid.Catalogueservice.services;

import lombok.AllArgsConstructor;
import org.sid.Catalogueservice.entities.Categorie;
import org.sid.Catalogueservice.repositories.CategorieRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class CategorieServiceImpl implements CategorieService {
    private CategorieRepository categorieRepository;
    @Override
    public Page<Categorie> getAllCategories(Pageable pageRequest , String keyword) {
        return categorieRepository.findByNameContains(pageRequest , keyword);
    }

    @Override
    public List<Categorie> getCategoris() {
        return categorieRepository.findAll();
    }

    @Override
    public String convertImageToBase64(byte[] image) {
        if (image != null && image.length > 0) {
            return java.util.Base64.getEncoder().encodeToString(image);
        }
        return null;
    }

    @Override
    public Categorie categorieById(Long id) {
        return  categorieRepository.findById(id).get();
    }

    @Override
    public Categorie AddCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    @Override
    public Categorie updateCategorie(Long id, Categorie categorie) {
        Categorie categorie1 = categorieRepository.findById(id).get();
        categorie1.setName(categorie.getName());
        categorie1.setImage(categorie.getImage());
        return categorieRepository.save(categorie1);
    }

    @Override
    public void deleteCategorie(Long id) {
         categorieRepository.deleteById(id);
    }

    @Override
    public Optional<Categorie> categorieByName(String name) {
        return categorieRepository.findByName(name);
    }

    @Override
    public List<Categorie> randomCateogories() {
        return categorieRepository.findRandomCategories();
    }
}
