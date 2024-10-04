package org.sid.Catalogueservice.repositories;

import org.sid.Catalogueservice.entities.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageModelRepository extends JpaRepository<ImageModel , Long> {
    Optional<ImageModel> findByName(String name);
}
