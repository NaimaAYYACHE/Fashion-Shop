package org.sid.Catalogueservice.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "fullCategorie" ,types = Categorie.class)
public interface CategorieProjection {
    public Long getId();
    public String getName();
    public byte[] getImage();
}
