package org.sid.Authservice.entities;

import org.sid.Authservice.entities.User;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "fullUser", types = User.class)
public interface UserProjection {
    Long getId();
    String getName();
    String getEmail();
}

